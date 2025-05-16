
import { CourseCard } from '@/components/course-card';

const courses = [
  {
    title: 'Basic Technical Training',
    level: 'Formación técnica básica',
    description: 'Módulos: Especialidades BTT Hidráulica (8h), BTT Electricidad (9h), BTT Mecánica (13,5h), BTT Instalación (18h). Duración: MEH 30,5 horas / MI 29 horas',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'electrical panel',
  },
  {
    title: 'Advanced Rescue Training',
    level: 'Formación de rescate avanzado',
    description: 'Cursos: Rescate Buje, Rotor, Interior pala (1); Rescate Nacelle, Torre, Sótano (2); Rescate Industrial (1); Rescate Industrial (2); Rescate Nacelle Refresh. Posibilidad de ART Combinado con los cuatro módulos. Duración: ART Combinado 21 horas',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'nacelle blades',
  },
  {
    title: 'Blade Repair',
    level: 'Reparación de palas de aerogenerador',
    description: 'Cursos: Reparación Palas GWO, Blade Repair Siemens Gamesa. Duración: 70 horas. Nuevo requisito indispensable para trabajar en la reparación de palas en el sector eólico mundial.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'nacelle technicians',
  },
  {
    title: 'Enhanced First Aid',
    level: 'Primeros auxilios avanzados',
    description: 'Cursos: BST Primeos Auxilios y Primeros Auxilios Avanzados. BST Primeros Auxilios Refresh y Primeros Auxilios Avanzados Refresh. Duración: 20 horas',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'cpr training',
  },
  {
    title: 'Control of Hazardous Energies',
    level: 'Control de Energías Peligrosas',
    description: 'Módulos: Módulo de Seguridad Básica, Módulo de Seguridad Eléctrica y Módulo de Seguridad de Fluidos a Presión. Duración total: 22 horas',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'electrical hazard',
  },
  {
    title: 'Slinger Signaller',
    level: 'Señalización y elevación de cargas',
    description: 'Curso: Señalización y elevación de cargas + Polipastos. Duración: 14 horas',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'crane nacelle',
  },
  {
    title: 'Wind Limited Access',
    level: 'Acceso Restringido en Aerogeneradores',
    description: 'Cursos: Acceso Restringido en Tierra y Acceso Restringido en Alta Mar. Duración: 7 horas',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'nacelle turbine',
  },
  {
    title: 'Instructor Qualification Training',
    level: 'Formación para la Cualificación de Instructores',
    description: 'Cursos: Formación para la Cualificación de Instructores (IQT), Formación Transversal para la Cualificación de Instructores (IQTX). Duración: 72 horas',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'instructor training',
  }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              level={course.level}
              description={course.description}
              imageUrl={course.imageUrl}
              data-ai-hint={course.imageHint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
