
export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        <p>© {new Date().getFullYear()} gwotraining.es. Todos los derechos reservados.</p>
        <p className="mt-1">
          Formación Profesional Certificada GWO en Seguridad.
        </p>
        <p className="mt-2">
          Powered by <a href="https://totalhse.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">totalhse</a>
        </p>
      </div>
    </footer>
  );
}
