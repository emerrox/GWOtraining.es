
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookie consent has already been given
    if (typeof window !== "undefined") {
      const consent = document.cookie
        .split('; ')
        .find(row => row.startsWith('gwo_cookie_consent='));
      if (!consent) {
        setIsVisible(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    if (typeof window !== "undefined") {
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1); // 1 year expiry
      document.cookie = `gwo_cookie_consent=true; path=/; expires=${expiryDate.toUTCString()}; SameSite=Lax`;
      setIsVisible(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80">
          Este sitio web utiliza cookies para asegurar que obtengas la mejor experiencia. Al continuar navegando, aceptas nuestro uso de cookies.
          <Link href="/politica-de-cookies" className="underline text-primary hover:text-primary/80 ml-1">
            Leer más
          </Link>
        </p>
        <Button onClick={acceptCookies} size="sm" className="bg-primary hover:bg-primary/80 text-primary-foreground">
          Aceptar
        </Button>
      </div>
    </div>
  );
}
