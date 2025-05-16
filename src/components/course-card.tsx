
import type { ElementType } from 'react';
import React from 'react';
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
  
  const renderDescription = (descriptionString: string) => {
    const segments = [];
    let lastIndex = 0;
    const regex = /(Módulos:|Cursos:)/gi; // g para global, i para case-insensitive
    let match;

    while ((match = regex.exec(descriptionString)) !== null) {
      // Texto antes de la etiqueta
      if (match.index > lastIndex) {
        segments.push({ type: 'text', content: descriptionString.substring(lastIndex, match.index) });
      }
      // La etiqueta
      // Capitalizar la primera letra de la etiqueta para consistencia visual
      const labelContent = match[0].charAt(0).toUpperCase() + match[0].slice(1);
      segments.push({ type: 'label', content: labelContent });
      lastIndex = regex.lastIndex;
    }

    // Texto después de la última etiqueta (o toda la cadena si no hay etiquetas)
    if (lastIndex < descriptionString.length) {
      segments.push({ type: 'text', content: descriptionString.substring(lastIndex) });
    }
    
    // Si no hay etiquetas, devolver la descripción original para un renderizado simple
    if (segments.length === 0 || (segments.length === 1 && segments[0].type === 'text')) {
      return descriptionString;
    }

    return segments.map((segment, index) => {
      if (segment.type === 'label') {
        return <h4 key={index} className="text-md font-semibold mt-3 mb-1 text-primary">{segment.content}</h4>;
      }
      // Devolver el contenido de texto directamente. React lo manejará.
      // Los saltos de línea y espacios serán manejados por whitespace-pre-line en el div/p padre.
      return segment.content; 
    });
  };

  return (
    <Card className="flex flex-col h-full shadow-lg">
      <CardHeader className="p-6 flex flex-col items-center justify-center h-40 bg-secondary/20">
        <Icon className="h-16 w-16 text-primary" aria-hidden="true" />
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="text-xl font-semibold text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-accent font-medium mb-2">{level}</CardDescription>
        <div className="text-foreground/80 text-base mt-1 leading-relaxed whitespace-pre-line flex-1">
          {renderDescription(description)}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-4 mt-auto">
        <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
          <Link href="#contact">Saber Más e Inscribirse</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
