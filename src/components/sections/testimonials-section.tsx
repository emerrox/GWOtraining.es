import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John D.',
    level: 'GWO Certified',
    comment: 'gwotraining.org provided top-notch GWO training. The instructors were knowledgeable and the facilities were excellent. Highly recommend!',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'JD',
    rating: 5,
    imageHint: 'person portrait',
  },
  {
    name: 'Sarah L.',
    level: 'GWO BST Modules',
    comment: 'As a newcomer to the wind industry, I felt fully supported. The GWO Basic Safety Training was challenging but rewarding. I feel confident starting my wind energy career.',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'SL',
    rating: 5,
    imageHint: 'person smiling',
  },
   {
    name: 'Mike P.',
    level: 'GWO ART Certified',
    comment: 'The GWO Advanced Rescue Training pushed my skills further. Great focus on safety and complex rescue scenarios. Thanks to the team!',
    avatarSrc: 'https://placehold.co/100x100.png',
    avatarFallback: 'MP',
    rating: 4,
    imageHint: 'technician face',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our <span className="text-primary">Graduates Say</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Hear from individuals who have successfully completed their GWO training with us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-foreground">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.level}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80 italic">&ldquo;{testimonial.comment}&rdquo;</p>
              </CardContent>
              <CardFooter className="flex justify-start pt-2">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
