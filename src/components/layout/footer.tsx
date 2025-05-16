import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto"> {/* Added mx-auto */}
        <p>© {new Date().getFullYear()} gwotraining.es. Todos los derechos reservados.</p>
        <p className="mt-1">
          Formación Profesional Certificada GWO en Seguridad.
        </p>
        <div className="mt-4 space-x-4">
          <Link href="/politica-de-cookies" className="text-sm text-muted-foreground hover:text-accent hover:underline">
            Política de Cookies
          </Link>
          <Link href="/politica-de-privacidad" className="text-sm text-muted-foreground hover:text-accent hover:underline">
            Política de Privacidad
          </Link>
        </div>
        <p className="mt-4">
          Powered by <a href="https://totalhse.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">totalhse</a>
        </p>
      </div>
    </footer>
  );
}
