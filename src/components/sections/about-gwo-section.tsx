import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Globe, TrendingUp } from 'lucide-react';

export function AboutGwoSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What is <span className="text-accent">GWO</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            GWO (Global Wind Organisation) is a non-profit body founded by wind turbine manufacturers and owners. GWO sets common international standards for safety training and emergency procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="GWO training safety equipment"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              data-ai-hint="wind turbine safety"
            />
          </div>
          <div className="space-y-6">
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <ShieldCheck className="mr-2 h-6 w-6" />
                  Standardized Safety Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  GWO establishes standardized safety training and emergency procedures, ensuring a recognized level of competence for technicians in the wind industry.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <Globe className="mr-2 h-6 w-6" />
                  Industry-Wide Acceptance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  GWO certification is recognized by leading wind turbine manufacturers and owners globally, opening doors to careers worldwide.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <TrendingUp className="mr-2 h-6 w-6" />
                  Essential for Wind Careers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  GWO training is often a prerequisite for working on wind turbines, enhancing your employability and career progression in the renewable energy sector.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
