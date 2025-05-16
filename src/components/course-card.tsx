
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
    // Regex to find labels, now including "Curso:"
    const labelRegex = /(Módulos:|Cursos:|Curso:|Duración:)/gi; 
    let match;

    while ((match = labelRegex.exec(descriptionString)) !== null) {
      if (match.index > currentIndex) {
        const textBefore = descriptionString.substring(currentIndex, match.index);
        if (textBefore.trim()) {
          parts.push({ type: 'text', content: textBefore.trim() });
        }
      }

      const labelText = match[0];
      const labelKey = labelText.toLowerCase().replace(':', '');
      
      let contentBlockStartIndex = labelRegex.lastIndex; 
      let contentBlockEnd = descriptionString.length;
      
      const peekRegex = new RegExp(labelRegex.source, 'gi');
      peekRegex.lastIndex = contentBlockStartIndex;
      const nextLabelMatch = peekRegex.exec(descriptionString);
      if (nextLabelMatch) {
        contentBlockEnd = nextLabelMatch.index;
      }
      
      const contentBlock = descriptionString.substring(contentBlockStartIndex, contentBlockEnd).trim();
      currentIndex = contentBlockEnd; 
      labelRegex.lastIndex = currentIndex; 

      // Skip "Duración:" entirely (label and content)
      if (labelKey === 'duración') {
        continue; 
      }
      
      // For "Módulos", "Cursos", "Curso" - only push content if it exists
      if ((labelKey === 'módulos' || labelKey === 'cursos' || labelKey === 'curso') && contentBlock) { 
        let items;
        if (contentBlock.includes('\n')) {
          items = contentBlock.split('\n');
        } else if (contentBlock.includes(';')) {
          items = contentBlock.split(';');
        } else if (contentBlock.includes(',')) {
          items = contentBlock.split(',');
        } else {
          items = [contentBlock]; 
        }
        
        const cleanedItems = items
          .map(item =>
            item
              .replace(/^[-\s•●▪▫■]\s*/, '') 
              .replace(/\.$/, '') 
              .replace(/\s*\([\d,.]+\s*h(?:oras?)?\)?\s*$/i, '') 
              .trim()
          )
          .filter(item => item); 

        if (cleanedItems.length > 0) {
          // Don't push the label itself, only the list items
          parts.push({ type: 'list', items: cleanedItems });
        } else if (contentBlock) { 
          // If no list items after cleaning but there was content, push as text
           parts.push({ type: 'text', content: contentBlock });
        }
      } else if (labelKey !== 'módulos' && labelKey !== 'cursos' && labelKey !== 'curso') {
        // For other labels (if any were to be introduced and NOT skipped like "Duración")
        parts.push({ type: 'label', content: labelText.charAt(0).toUpperCase() + labelText.slice(1) });
        if (contentBlock) {
             parts.push({ type: 'text', content: contentBlock });
        }
      }
    }

    if (currentIndex < descriptionString.length) {
      const remainingText = descriptionString.substring(currentIndex).trim();
      if (remainingText) {
        parts.push({ type: 'text', content: remainingText });
      }
    }
    
    if (parts.length === 0 && descriptionString.trim()) {
       return descriptionString; // Fallback if no labels are found
    }
    if (parts.length === 0) return null;

    return parts.map((part, index) => {
      if (part.type === 'label') {
        // Labels "Módulos", "Cursos", "Curso" are not rendered here.
        // Only other labels would be (currently none, as "Duración" is skipped).
        const lowerCaseContent = part.content.toLowerCase();
        if (
            lowerCaseContent.startsWith('módulos') ||
            lowerCaseContent.startsWith('cursos') ||
            lowerCaseContent.startsWith('curso')
        ) {
            return null; 
        }
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
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
      <CardHeader className="py-6 flex flex-col items-center justify-center bg-secondary/20">
        <Icon className="h-16 w-16 text-primary" aria-hidden="true" />
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="text-xl font-semibold text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-accent font-medium mb-2">{level}</CardDescription>
        <div className="text-foreground/80 text-base mt-1 leading-relaxed whitespace-pre-line flex-1">
          {renderDescription(description)}
        </div>
      </CardContent>
      <CardFooter className="p-6 mt-auto">
        <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
          <Link href="#contact">Saber Más e Inscribirse</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
