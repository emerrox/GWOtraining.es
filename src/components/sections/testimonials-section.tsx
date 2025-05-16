
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, User } from 'lucide-react'; // Imported User icon

const testimonials = [
  {
    name: 'Juan D.',
    level: 'Certificado GWO',
    comment: 'gwotraining.es proporcionó una formación GWO de primera categoría. Los instructores estaban muy bien informados y las instalaciones eran excelentes. ¡Muy recomendable!',
    // avatarSrc: 'https://placehold.co/100x100.png', // Removed
    // avatarFallback: 'JD', // Original fallback, will be replaced by icon
    rating: 5,
  },
  {
    name: 'Sara L.',
    level: 'Módulos GWO BST',
    comment: 'Como recién llegada a la industria eólica, me sentí totalmente apoyada. La Formación Básica en Seguridad de GWO fue desafiante pero gratificante. Me siento segura para comenzar mi carrera en la energía eólica.',
    // avatarSrc: 'https://placehold.co/100x100.png', // Removed
    // avatarFallback: 'SL', // Original fallback, will be replaced by icon
    rating: 5,
  },
   {
    name: 'Miguel P.',
    level: 'Certificado GWO ART',
    comment: 'La Formación Avanzada en Rescate de GWO llevó mis habilidades más allá. Gran enfoque en la seguridad y escenarios de rescate complejos. ¡Gracias al equipo!',
    // avatarSrc: 'https://placehold.co/100x100.png', // Removed
    // avatarFallback: 'MP', // Original fallback, will be replaced by icon
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Lo que Dicen Nuestros <span className="text-primary">Graduados</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Escucha a personas que han completado con éxito su formación GWO con nosotros.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <Avatar className="h-12 w-12">
                  {/* AvatarImage will not render if src is undefined */}
                  <AvatarImage src={undefined} alt={testimonial.name} />
                  <AvatarFallback>
                    <User className="h-6 w-6 text-muted-foreground" />
                  </AvatarFallback>
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
