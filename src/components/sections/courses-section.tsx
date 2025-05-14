import { CourseCard } from '@/components/course-card';

const courses = [
  {
    title: 'GWO Formación Básica en Seguridad (BST)',
    level: 'Módulos Básicos de Seguridad',
    description: 'Formación esencial en seguridad que cubre Primeros Auxilios, Manipulación Manual de Cargas, Concienciación sobre Incendios, Trabajos en Altura y Supervivencia en el Mar (dependiendo del módulo).',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'wind safety core',
  },
  {
    title: 'GWO Trabajos en Altura',
    level: 'Módulo Especializado',
    description: 'Formación exhaustiva sobre trabajo seguro en altura, identificación de peligros, rescate avanzado y uso de equipos de protección individual (EPI).',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'height safety harness',
  },
  {
    title: 'GWO Formación Avanzada en Rescate (ART)',
    level: 'Módulo Avanzado',
    description: 'Desarrolla habilidades para operaciones de rescate avanzadas en diversos entornos de góndola, torre y cimentación de aerogeneradores.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'rescue training advanced',
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Nuestros <span className="text-primary">Módulos GWO</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Ofrecemos módulos de formación GWO integrales para garantizar tu seguridad en la industria eólica.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              level={course.level}
              description={course.description}
              imageUrl={course.imageUrl}
              imageHint={course.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
