
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Política de Cookies - gwotraining.es',
  description: 'Información detallada sobre el uso de cookies en gwotraining.es.',
};

export default function PoliticaDeCookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none text-foreground">
          <h1 className="text-3xl font-bold text-primary mb-6">Política de Cookies</h1>
          
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-foreground mb-4">AVISO IMPORTANTE</h2>
            <p className="text-lg text-destructive mb-4">
              Por favor, reemplaza TODO el contenido de esta sección (incluyendo este aviso) 
              con el texto real de la política de cookies de <a href="https://gwocursos.es/politica-de-cookies/" target="_blank" rel="noopener noreferrer" className="underline">gwocursos.es/politica-de-cookies/</a>.
            </p>
            <p className="text-foreground/80">
              Este es un marcador de posición. El contenido real debe detallar qué son las cookies, qué tipos de cookies utiliza el sitio, 
              para qué fines, cómo se pueden gestionar o desactivar, y cualquier otra información legalmente requerida.
            </p>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. ¿Qué son las cookies? (Ejemplo de marcador)</h2>
            <p className="text-foreground/80">
              Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad 
              es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página. Las cookies suelen almacenar información 
              de carácter técnico, preferencias personales, personalización de contenidos, estadísticas de uso, enlaces a redes sociales, 
              acceso a cuentas de usuario, etc. El objetivo de la cookie es adaptar el contenido de la web a su perfil y necesidades, sin 
              cookies los servicios ofrecidos por cualquier página se verían mermados notablemente.
            </p>
            {/* CONTINÚA AQUÍ CON EL TEXTO REAL DE gwocursos.es */}
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Cookies utilizadas en este sitio web (Ejemplo de marcador)</h2>
            <p className="text-foreground/80">
              Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.
            </p>
            <p className="text-foreground/80">Este sitio web utiliza las siguientes <strong>cookies propias</strong>:</p>
            <ul className="list-disc list-inside text-foreground/80 ml-4">
              <li>Cookies de sesión, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.</li>
              <li>Cookie de consentimiento: `gwo_cookie_consent` - Almacena la preferencia del usuario sobre la aceptación de cookies. Duración: 1 año.</li>
            </ul>
            <p className="text-foreground/80 mt-2">Este sitio web utiliza las siguientes <strong>cookies de terceros</strong>:</p>
            <ul className="list-disc list-inside text-foreground/80 ml-4">
              <li>Google Analytics: Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.</li>
              <li>Redes sociales: Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir.</li>
            </ul>
            {/* CONTINÚA AQUÍ CON EL TEXTO REAL DE gwocursos.es */}
          </section>
          
          {/* AÑADE MÁS SECCIONES SEGÚN EL CONTENIDO ORIGINAL DE gwocursos.es */}
          
          <section className="mt-8">
            <p className="text-foreground/80">
              Fecha de última actualización: [Inserta fecha aquí, cuando actualices el contenido]
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
