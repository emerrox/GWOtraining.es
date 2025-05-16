
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
        <article className="max-w-none text-foreground bg-card p-6 md:p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-primary mb-6 border-b pb-4">Política de Cookies</h1>
          
          <section className="mb-6">
            <p className="text-foreground/80">Como tantos otras, nuestra web utiliza cookies. Aquí te explicamos qué son y para qué las usamos.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">¿Qué son las cookies?</h2>
            <p className="text-foreground/80">
              Una cookie es un archivo que se descarga en su dispositivo al acceder a páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario, y así poder mejorar el servicio que se ofrece.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3 border-t pt-4">Tipos de cookies que utiliza esta web</h2>
            <p className="text-foreground/80 mb-4">Existen diferentes tipos de cookies según su funcionalidad y origen.</p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies técnicas:</h3>
            <p className="text-foreground/80">
              Son las que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo: controlar el tráfico y la comunicación de datos, identificar la sesión, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies de personalización:</h3>
            <p className="text-foreground/80">
              Son las que permiten al usuario navegar por la página web con algunas características predefinidas según las características del dispositivo del usuario, como pueden ser el idioma o el tipo de navegador al través del que accede.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies de análisis:</h3>
            <p className="text-foreground/80">
              Son aquellas que son tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza la navegación en nuestra página web con el fin de mejorar la misma. En ningún caso recogen datos personales.
            </p>
            <p className="text-foreground/80 mt-2">
              La aplicación que utilizamos para obtener y analizar la información es Google Analytics.
            </p>
            <p className="text-foreground/80 mt-2">
              Las cookies utilizadas para esto (_utma, _utmb, _utmc, _utmt y _utmz) son cookies de terceros.
            </p>
            <p className="text-foreground/80 mt-2">
              Estas cookies se utilizan para recoger información sobre la navegación de los usuarios por el sitio con el fin de conocer el origen de las visitas y otros datos similares a nivel estadístico.
            </p>
            <p className="text-foreground/80 mt-2">
              A través de los siguientes enlaces puede ver el detalle de las cookies que utiliza Google Analitiycs y supropósito: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a> y <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Centro de privacidad de Google</a>
            </p>
            <p className="text-foreground/80 mt-2">
              También usamos una cookie propia para gestionar tu consentimiento: `gwo_cookie_consent` - Almacena la preferencia del usuario sobre la aceptación de cookies. Duración: 1 año.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3 border-t pt-4">Eliminar o bloquear las cookies</h2>
            <p className="text-foreground/80">
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
            <p className="text-foreground/80 mt-2">
              Puede ver más información sobre su navegador y las cookies en los siguientes enlaces:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-1 mt-2 pl-4">
              <li>Firefox: <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we</a></li>
              <li>Chrome: <a href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647</a></li>
              <li>Internet Explorer: <a href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9</a></li>
              <li>Safari: <a href="http://support.apple.com/kb/ph5042" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">http://support.apple.com/kb/ph5042</a></li>
              <li>Opera: <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">http://help.opera.com/Windows/11.50/es-ES/cookies.html</a></li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-primary mt-6 mb-3 border-t pt-4">Complemento de inhabilitación para navegadores de Google Analytics</h2>
            <p className="text-foreground/80">
              Si desea rechazar las cookies analíticas de Google Analytics en todos los navegadores, de forma que no se envíe información suya a Google Analitys, puede descargar un complemento que realiza esta función desde este enlace: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://tools.google.com/dlpage/gaoptout</a>.
            </p>
          </section>
          
          <section className="mt-8">
            <p className="text-foreground/80 text-sm">
              Fecha de última actualización: 17 de Mayo de 2024 (o la fecha actual de la modificación)
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

    