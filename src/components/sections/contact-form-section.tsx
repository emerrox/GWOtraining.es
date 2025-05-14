import { ContactFormComponent } from '@/components/forms/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export function ContactFormSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Have questions, need more information, or ready to enroll? Fill out the form below, and we&apos;ll get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Us</CardTitle>
              <CardDescription>
                We&apos;re here to help you on your journey to becoming a GWO certified professional.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactFormComponent />
            </CardContent>
          </Card>
          <div className="hidden lg:block relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://placehold.co/600x450.png"
                alt="Contact person for GWO courses"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint="customer service"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
