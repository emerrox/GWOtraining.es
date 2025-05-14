import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary/30">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Rope access technician at height"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-20"
          data-ai-hint="rope access training"
        />
         <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Master <span className="text-primary">Rope Access</span>
          <br />
          with IRATA Certified Training
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          Join CursoIrata.org for internationally recognized IRATA courses. 
          Advance your career with expert-led training in industrial rope access.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#courses">Explore Courses</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
