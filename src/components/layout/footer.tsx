export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        © {new Date().getFullYear()} gwotraining.es. Todos los derechos reservados.
        <p className="mt-1">
          Formación Profesional Certificada GWO en Seguridad.
        </p>
      </div>
    </footer>
  );
}
