
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
    if (!descriptionString) return null;

    const parts = [];
    let currentIndex = 0;
    const labelRegex = /(Módulos:|Cursos:|Curso:|Duración:)/gi; // Added "Curso:"
    let match;

    while ((match = labelRegex.exec(descriptionString)) !== null) {
      // Text before the current label
      if (match.index > currentIndex) {
        const textBefore = descriptionString.substring(currentIndex, match.index);
        if (textBefore.trim()) {
          parts.push({ type: 'text', content: textBefore.trim() });
        }
      }

      const labelText = match[0];
      const labelKey = labelText.toLowerCase().replace(':', '');
      
      // Determine the content block for this label
      let contentBlockStartIndex = labelRegex.lastIndex; // Start of content for this label
      let contentBlockEnd = descriptionString.length;
      
      // Peek for the next label without advancing the main regex
      const peekRegex = new RegExp(labelRegex.source, 'gi');
      peekRegex.lastIndex = contentBlockStartIndex;
      const nextLabelMatch = peekRegex.exec(descriptionString);
      if (nextLabelMatch) {
        contentBlockEnd = nextLabelMatch.index;
      }
      
      const contentBlock = descriptionString.substring(contentBlockStartIndex, contentBlockEnd).trim();
      currentIndex = contentBlockEnd; // Advance currentIndex past this content block for the next iteration in the main loop
      labelRegex.lastIndex = currentIndex; // Crucial: Update lastIndex for the main regex

      // Skip "Duración:"
      if (labelKey === 'duración') {
        continue; 
      }
      
      parts.push({ type: 'label', content: labelText.charAt(0).toUpperCase() + labelText.slice(1) });
      
      if ((labelKey === 'módulos' || labelKey === 'cursos' || labelKey === 'curso') && contentBlock) { // Added 'curso'
        let items;
        if (contentBlock.includes('\n')) {
          items = contentBlock.split('\n');
        } else if (contentBlock.includes(';')) {
          items = contentBlock.split(';');
        } else if (contentBlock.includes(',')) {
          items = contentBlock.split(',');
        } else {
          items = [contentBlock]; // Single item
        }
        
        const cleanedItems = items
          .map(item =>
            item
              .replace(/^[-\s•●▪▫■]\s*/, '') // Remove common list markers
              .replace(/\.$/, '') // Remove trailing period
              .replace(/\s*\([\d,.]+\s*h(?:oras?)?\)?\s*$/i, '') // Remove (Xh) or (X horas) at the end
              .trim()
          )
          .filter(item => item); // Filter out empty items

        if (cleanedItems.length > 0) {
          parts.push({ type: 'list', items: cleanedItems });
        } else if (contentBlock) { 
          parts.push({ type: 'text', content: contentBlock });
        }
      } else if (contentBlock) { 
        parts.push({ type: 'text', content: contentBlock });
      }
    }

    // Remaining text after all labels (if any, and if it's not part of a skipped duration)
    if (currentIndex < descriptionString.length) {
      const remainingText = descriptionString.substring(currentIndex).trim();
      if (remainingText) {
        parts.push({ type: 'text', content: remainingText });
      }
    }
    
    if (parts.length === 0 && descriptionString.trim()) {
       return descriptionString;
    }
    if (parts.length === 0) return null;

    return parts.map((part, index) => {
      if (part.type === 'label') {
        return <h4 key={`label-${index}`} className="text-md font-semibold mt-3 mb-1 text-primary">{part.content}</h4>;
      }
      if (part.type === 'list') {
        return (
          <div key={`list-${index}`} className="mt-1 mb-2 flex flex-wrap gap-1">
            {part.items.map((item, itemIndex) => (
              <div
                key={`item-${index}-${itemIndex}`}
                className="bg-secondary/30 text-secondary-foreground px-2 py-1 rounded-md text-xs shadow-sm border border-border/70"
              >
                {item}
              </div>
            ))}
          </div>
        );
      }
      // part.type === 'text'
      return part.content ? <React.Fragment key={`text-${index}`}>{part.content}</React.Fragment> : null;
    });
  };

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
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
