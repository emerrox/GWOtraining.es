import Link from 'next/link';
import { Mountain } from 'lucide-react'; // Using Mountain as a generic placeholder icon

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-center"> {/* Added mx-auto and justify-center */}
        <div className="flex items-center"> {/* Wrapper for logo and nav links */}
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              gwotraining.es
            </span>
          </Link>
          <nav className="flex items-center space-x-4 sm:space-x-6"> {/* Removed flex-1 */}
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
      </div>
    </header>
  );
}
