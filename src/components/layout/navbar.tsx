import Link from 'next/link';
import { Mountain } from 'lucide-react'; // Using Mountain as a generic placeholder icon

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            gwotraining.es
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:space-x-6">
          <Link
            href="/#courses"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Cursos
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Sobre GWO
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
