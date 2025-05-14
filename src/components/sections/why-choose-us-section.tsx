import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShieldCheck, Award, TrendingUp, MapPin, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Instructores Certificados por GWO',
    description: 'Aprende de instructores certificados por GWO con amplia experiencia, dedicados a tu éxito en la industria eólica.',
  },
  {
    icon: MapPin,
    title: 'Instalaciones de Vanguardia',
    description: 'Fórmate en un entorno seguro y controlado con equipos modernos y escenarios realistas de aerogeneradores.',
  },
  {
    icon: ShieldCheck,
    title: 'Cultura de Seguridad Primero',
    description: 'Priorizamos la seguridad por encima de todo, inculcando las mejores prácticas de GWO durante toda tu formación.',
  },
  {
    icon: Award,
    title: 'Certificación Reconocida Globalmente',
    description: 'Obtén una cualificación GWO respetada por los empleadores del sector de la energía eólica en todo el mundo.',
  },
  {
    icon: TrendingUp,
    title: 'Apoyo Profesional',
    description: 'Ofrecemos orientación para ayudarte a navegar tu trayectoria profesional en el floreciente sector de la energía eólica.',
  },
  {
    icon: BookOpen,
    title: 'Plan de Estudios Completo',
    description: 'Nuestros cursos cubren todos los aspectos teóricos y prácticos requeridos por los estándares GWO para la seguridad en aerogeneradores.',
  }
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Por Qué Formarse con <span className="text-accent">gwotraining.es</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Estamos comprometidos a proporcionar formación GWO de la más alta calidad que te prepare para una carrera exitosa y segura en la industria eólica.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
