
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
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-6 flex flex-col items-center justify-center h-40 bg-secondary/20">
        <Icon className="h-16 w-16 text-primary" aria-hidden="true" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-accent font-medium mb-2">{level}</CardDescription>
        <p className="text-foreground/80 text-base">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
          <Link href="#contact">Saber Más e Inscribirse</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
