"use client"; 

import dynamic from 'next/dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

const DynamicContactFormComponent = dynamic(
  () => import('@/components/forms/contact-form').then((mod) => mod.ContactFormComponent),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-6 p-1">
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-24 w-full" />
        </div>
        <Skeleton className="h-10 w-full" />
      </div>
    ),
  }
);

export function ContactFormSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ponte en <span className="text-accent">Contacto</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            ¿Tienes preguntas, necesitas más información o estás listo para inscribirte? Completa el formulario a continuación y nos pondremos en contacto contigo en breve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contáctanos</CardTitle>
              <CardDescription>
                Estamos aquí para ayudarte en tu camino para convertirte en un profesional certificado por GWO.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DynamicContactFormComponent />
            </CardContent>
          </Card>
          <div className="hidden lg:block relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
             <Image
                src="/images/contact-customer-service.jpg" // Actualiza este nombre de archivo
                alt="Persona de contacto para cursos GWO"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
