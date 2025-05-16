import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Globe, TrendingUp } from 'lucide-react';

export function AboutGwoSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¿Qué es <span className="text-accent">GWO</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            GWO (Global Wind Organisation) es una organización sin ánimo de lucro fundada por fabricantes y propietarios de aerogeneradores. GWO establece estándares internacionales comunes para la formación en seguridad y procedimientos de emergencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/curso4.png" 
              alt="Equipamiento de seguridad para formación GWO"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="space-y-6">
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <ShieldCheck className="mr-2 h-6 w-6" />
                  Formación Estandarizada en Seguridad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  GWO establece formación en seguridad y procedimientos de emergencia estandarizados, asegurando un nivel de competencia reconocido para los técnicos de la industria eólica.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <Globe className="mr-2 h-6 w-6" />
                  Aceptación en Toda la Industria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  La certificación GWO es reconocida por los principales fabricantes y propietarios de aerogeneradores a nivel mundial, abriendo puertas a carreras en todo el mundo.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <TrendingUp className="mr-2 h-6 w-6" />
                  Esencial para Carreras en el Sector Eólico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  La formación GWO es a menudo un requisito previo para trabajar en aerogeneradores, mejorando tu empleabilidad y progresión profesional en el sector de las energías renovables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
