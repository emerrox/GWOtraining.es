
"use client";

import { useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { submitContactForm, type ContactFormState, type ContactFormValues } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  course: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const initialState: ContactFormState = {
  message: "",
  status: "idle",
  errors: null,
  fieldValues: {
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  }
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactFormComponent() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initialState.fieldValues,
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset(initialState.fieldValues); // Reset form fields to initial empty state
    } else if (state.status === 'error') {
      toast({
        title: "Error",
        description: state.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
      // Set errors for react-hook-form from server response
      if (state.errors) {
        Object.entries(state.errors).forEach(([key, value]) => {
          if (key !== '_form' && value) { // _form is a general error, not specific field
             form.setError(key as keyof ContactFormValues, { type: 'server', message: value.join(', ') });
          }
        });
      }
      // Persist field values on error
      if (state.fieldValues) {
        form.reset(state.fieldValues);
      }
    }
  }, [state, toast, form]);

  const handleFormSubmit = async (data: ContactFormValues) => {
    const formData = new FormData();
    // Iterate over the data object from react-hook-form and append to FormData
    (Object.keys(data) as Array<keyof ContactFormValues>).forEach((key) => {
      const value = data[key];
      // Append if the value is not undefined or null.
      // Empty strings (e.g., for an unselected optional course) will be appended as empty strings.
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });
    await formAction(formData);
  };

  return (
    <form
      action={formAction} // Server action for progressive enhancement or if JS fails
      className="space-y-6"
      onSubmit={form.handleSubmit(handleFormSubmit)} // RHF handles client validation and calls handleFormSubmit
    >
      <div>
        <Label htmlFor="name" className={cn(form.formState.errors.name && "text-destructive")}>Full Name</Label>
        <Input
          id="name"
          {...form.register("name")}
          className={cn(form.formState.errors.name && "border-destructive focus-visible:ring-destructive")}
          aria-invalid={!!form.formState.errors.name}
          aria-describedby={form.formState.errors.name ? "name-error" : undefined}
        />
        {form.formState.errors.name && (
          <p id="name-error" className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
        )}
        {state.errors?.name && !form.formState.errors.name && (
           <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className={cn(form.formState.errors.email && "text-destructive")}>Email Address</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className={cn(form.formState.errors.email && "border-destructive focus-visible:ring-destructive")}
          aria-invalid={!!form.formState.errors.email}
          aria-describedby={form.formState.errors.email ? "email-error" : undefined}
        />
        {form.formState.errors.email && (
          <p id="email-error" className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
        )}
         {state.errors?.email && !form.formState.errors.email && (
           <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          {...form.register("phone")}
          aria-describedby={state.errors?.phone ? "phone-server-error" : undefined}
        />
         {state.errors?.phone && !form.formState.errors.phone && (
           <p id="phone-server-error" className="text-sm text-destructive mt-1">{state.errors.phone.join(', ')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="course">Course of Interest (Optional)</Label>
        <Select name="course" onValueChange={(value) => form.setValue('course', value === 'not-specified' ? '' : value)} defaultValue={form.getValues("course") || undefined}>
          <SelectTrigger id="course" aria-describedby={state.errors?.course ? "course-server-error" : undefined}>
            <SelectValue placeholder="Select a course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IRATA Level 1">IRATA Level 1</SelectItem>
            <SelectItem value="IRATA Level 2">IRATA Level 2</SelectItem>
            <SelectItem value="IRATA Level 3">IRATA Level 3</SelectItem>
            <SelectItem value="Other Inquiry">Other Inquiry</SelectItem>
            <SelectItem value="not-specified">None / Not Specified</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.course && !form.formState.errors.course && (
           <p id="course-server-error" className="text-sm text-destructive mt-1">{state.errors.course.join(', ')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className={cn(form.formState.errors.message && "text-destructive")}>Message</Label>
        <Textarea
          id="message"
          rows={5}
          {...form.register("message")}
          className={cn(form.formState.errors.message && "border-destructive focus-visible:ring-destructive")}
          aria-invalid={!!form.formState.errors.message}
          aria-describedby={form.formState.errors.message ? "message-error" : undefined}
        />
        {form.formState.errors.message && (
          <p id="message-error" className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
        )}
        {state.errors?.message && !form.formState.errors.message && (
           <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>
        )}
      </div>
      
      {state.errors?._form && (
          <p className="text-sm font-medium text-destructive text-center bg-destructive/10 p-2 rounded-md">{state.errors._form.join(', ')}</p>
      )}

      <SubmitButton />
    </form>
  );
}
