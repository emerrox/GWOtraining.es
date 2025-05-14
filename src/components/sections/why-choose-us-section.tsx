import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShieldCheck, Award, TrendingUp, MapPin, BookOpen } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Certified Instructors',
    description: 'Learn from highly experienced IRATA certified instructors dedicated to your success.',
  },
  {
    icon: MapPin,
    title: 'State-of-the-Art Facilities',
    description: 'Train in a safe, controlled environment with modern equipment and realistic scenarios.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First Culture',
    description: 'We prioritize safety above all, instilling best practices throughout your training.',
  },
  {
    icon: Award,
    title: 'Globally Recognized Certification',
    description: 'Gain an IRATA qualification respected by employers worldwide.',
  },
  {
    icon: TrendingUp,
    title: 'Career Support',
    description: 'We provide guidance to help you navigate your career path in the rope access industry.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Our courses cover all theoretical and practical aspects required by IRATA standards.',
  }
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Train with <span className="text-accent">CursoIrata.org</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            We are committed to providing top-quality IRATA training that equips you for a successful and safe career.
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
