
import type { ElementType } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  level: string;
  description: string;
  icon: ElementType; // Icon component from lucide-react
}

export function CourseCard({ title, level, description, icon: Icon }: CourseCardProps) {
  return (
    <Card className="group flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] overflow-hidden">
      <CardHeader className="p-6 flex flex-col items-center justify-center h-40 bg-secondary/20">
        <Icon className="h-16 w-16 text-primary" aria-hidden="true" />
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="text-xl font-semibold text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-accent font-medium mb-2">{level}</CardDescription>
        
        {/* Container for description with hover expand effect */}
        <div className="relative mt-1 flex-1 min-h-0"> {/* flex-1 and min-h-0 allow proper shrinking/growing */}
          <div 
            className="overflow-hidden max-h-[5rem] group-hover:max-h-[500px] transition-all duration-700 ease-in-out"
            style={{ willChange: 'max-height' }} // Performance hint for the browser
          >
            <p className="text-foreground/80 text-base leading-relaxed">
              {description}
            </p>
          </div>
          {/* Gradient fade effect for truncated text, fades out on hover */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card via-card/90 to-transparent pointer-events-none 
                       opacity-100 group-hover:opacity-0 transition-opacity duration-300 delay-0 group-hover:delay-200"
            aria-hidden="true"
          />
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-4 mt-auto"> {/* Added mt-auto to push footer down, pt-4 for spacing */}
        <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
          <Link href="#contact">Saber Más e Inscribirse</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
