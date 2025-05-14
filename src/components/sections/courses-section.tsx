import { CourseCard } from '@/components/course-card';

const courses = [
  {
    title: 'GWO Basic Safety Training (BST)',
    level: 'Core Safety Modules',
    description: 'Essential safety training covering First Aid, Manual Handling, Fire Awareness, Working at Heights, and Sea Survival (module dependent).',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'wind safety core',
  },
  {
    title: 'GWO Working at Heights',
    level: 'Specialized Module',
    description: 'In-depth training on safe work at height, hazard identification, advanced rescue and use of personal protective equipment (PPE).',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'height safety harness',
  },
  {
    title: 'GWO Advanced Rescue Training (ART)',
    level: 'Advanced Module',
    description: 'Develop skills for advanced rescue operations in various wind turbine nacelle, tower and basement environments.',
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
            Our <span className="text-primary">GWO Modules</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            We offer comprehensive GWO training modules to ensure your safety in the wind industry.
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
