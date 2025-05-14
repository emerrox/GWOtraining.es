import { CourseCard } from '@/components/course-card';

const courses = [
  {
    title: 'IRATA Level 1',
    level: 'Foundation Level',
    description: 'Your first step into the rope access industry. Learn fundamental rope access maneuvers, equipment use, and safety protocols.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'rope access basic',
  },
  {
    title: 'IRATA Level 2',
    level: 'Intermediate Level',
    description: 'Build upon Level 1 skills with advanced rigging, rescue techniques, and a greater understanding of rope access legislation.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'rope access intermediate',
  },
  {
    title: 'IRATA Level 3',
    level: 'Advanced Supervisor Level',
    description: 'The highest level, qualifying you to supervise rope access projects, perform advanced rescues, and understand equipment inspection.',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'rope access advanced',
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our <span className="text-primary">IRATA Courses</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            We offer comprehensive IRATA training for all levels, from beginner to advanced supervisor.
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
