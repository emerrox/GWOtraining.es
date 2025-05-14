
"use client";

import { useEffect, startTransition, useActionState } from 'react';
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
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce una dirección de correo electrónico válida." }),
  phone: z.string().optional(),
  course: z.string().optional(),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
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
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
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
        title: "¡Éxito!",
        description: state.message,
      });
      form.reset(initialState.fieldValues);
    } else if (state.status === 'error') {
      toast({
        title: "Error",
        description: state.message || "Ocurrió un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
      if (state.errors) {
        Object.entries(state.errors).forEach(([key, value]) => {
          if (key !== '_form' && value) {
             form.setError(key as keyof ContactFormValues, { type: 'server', message: value.join(', ') });
          }
        });
      }
      if (state.fieldValues) {
        form.reset(state.fieldValues);
      }
    }
  }, [state, toast, form]);
  
  const handleFormSubmit = (data: ContactFormValues) => { 
    const formData = new FormData();
    (Object.keys(data) as Array<keyof ContactFormValues>).forEach((key) => {
      const value = data[key];
      if (value !== undefined && value !== null && value !== '') { 
        formData.append(key, String(value));
      } else if (value === '' && (key === 'phone' || key === 'course')) {
        // Do not append if optional and empty
      } else if (value !== undefined && value !== null) { 
         formData.append(key, String(value));
      }
    });
    startTransition(() => { 
      formAction(formData);
    });
  };

  return (
    <form
      action={formAction}
      className="space-y-6"
      onSubmit={form.handleSubmit(handleFormSubmit)}
    >
      <div>
        <Label htmlFor="name" className={cn(form.formState.errors.name && "text-destructive")}>Nombre Completo</Label>
        <Input
          id="name"
          {...form.register("name")}
          className={cn(form.formState.errors.name && "border-destructive focus-visible:ring-destructive")}
          aria-invalid={!!form.formState.errors.name}
          aria-describedby={form.formState.errors.name ? "name-error" : (state.errors?.name ? "name-server-error" : undefined)}
        />
        {form.formState.errors.name && (
          <p id="name-error" className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
        )}
        {state.errors?.name && !form.formState.errors.name && (
           <p id="name-server-error" className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className={cn(form.formState.errors.email && "text-destructive")}>Dirección de Correo Electrónico</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className={cn(form.formState.errors.email && "border-destructive focus-visible:ring-destructive")}
          aria-invalid={!!form.formState.errors.email}
          aria-describedby={form.formState.errors.email ? "email-error" : (state.errors?.email ? "email-server-error" : undefined)}
        />
        {form.formState.errors.email && (
          <p id="email-error" className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
        )}
         {state.errors?.email && !form.formState.errors.email && (
           <p id="email-server-error" className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Número de Teléfono (Opcional)</Label>
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
        <Label htmlFor="course">Curso de Interés (Opcional)</Label>
        <Select
          name="course"
          onValueChange={(value) => form.setValue('course', value === 'not-specified' ? '' : value)}
          defaultValue={form.getValues("course") || undefined}
        >
          <SelectTrigger id="course" aria-describedby={state.errors?.course ? "course-server-error" : undefined}>
            <SelectValue placeholder="Selecciona un módulo GWO" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GWO Formacion Basica en Seguridad (BST)">GWO Formación Básica en Seguridad (BST)</SelectItem>
            <SelectItem value="GWO Formacion Tecnica Basica (BTT)">GWO Formación Técnica Básica (BTT)</SelectItem>
            <SelectItem value="GWO Formacion Avanzada en Rescate (ART)">GWO Formación Avanzada en Rescate (ART)</SelectItem>
            <SelectItem value="GWO Primeros Auxilios Avanzados (EFA)">GWO Primeros Auxilios Avanzados (EFA)</SelectItem>
            <SelectItem value="Otra Consulta">Otra Consulta</SelectItem>
            <SelectItem value="not-specified">Ninguno / No Especificado</SelectItem>
          </SelectContent>
        </Select>
        {state.errors?.course && !form.formState.errors.course && (
           <p id="course-server-error" className="text-sm text-destructive mt-1">{state.errors.course.join(', ')}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className={cn(form.formState.errors.message && "text-destructive")}>Mensaje</Label>
        <Textarea
          id="message"
          rows={5}
          {...form.register("message")}
          className={cn(form.formState.errors.message && "border-destructive focus-visible:ring-destructive")}
          aria-invalid={!!form.formState.errors.message}
          aria-describedby={form.formState.errors.message ? "message-error" : (state.errors?.message ? "message-server-error" : undefined)}
        />
        {form.formState.errors.message && (
          <p id="message-error" className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
        )}
        {state.errors?.message && !form.formState.errors.message && (
           <p id="message-server-error" className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>
        )}
      </div>
      
      {state.errors?._form && (
          <p className="text-sm font-medium text-destructive text-center bg-destructive/10 p-2 rounded-md">{state.errors._form.join(', ')}</p>
      )}

      <SubmitButton />
    </form>
  );
}
