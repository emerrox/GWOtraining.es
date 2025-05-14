import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Globe, TrendingUp } from 'lucide-react';

export function AboutIrataSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What is <span className="text-accent">IRATA</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            IRATA (Industrial Rope Access Trade Association) is the sole global trade association in the work-at-height sector.
            It has member companies in every continent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="IRATA safety equipment"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              data-ai-hint="safety equipment"
            />
          </div>
          <div className="space-y-6">
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <ShieldCheck className="mr-2 h-6 w-6" />
                  Global Standard for Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  IRATA sets the highest standards for safety and training in industrial rope access. 
                  Certification is recognized worldwide, ensuring you work to proven safe systems.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <Globe className="mr-2 h-6 w-6" />
                  Worldwide Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  An IRATA qualification is your passport to rope access work globally, across various industries like oil & gas, construction, and maintenance.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <TrendingUp className="mr-2 h-6 w-6" />
                  Career Advancement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Progress through IRATA levels (1, 2, and 3) to enhance your skills, responsibilities, and career opportunities in the rope access industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
