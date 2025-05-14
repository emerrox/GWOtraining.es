import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  level: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export function CourseCard({ title, level, description, imageUrl, imageHint }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-semibold text-primary mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-accent font-medium mb-2">{level}</CardDescription>
        <p className="text-foreground/80 text-base">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground">
          <Link href="#contact">Learn More & Enroll</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
