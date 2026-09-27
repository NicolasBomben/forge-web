import { useEffect } from 'react';


function MetaPixelScript() {
  // Usamos useEffect para asegurarnos de que el código se ejecute
  // solo después de que el componente se haya montado en el navegador.
  useEffect(() => {
    // Verificamos si la función del Píxel (fbq) ya existe.
    // Si no existe, la inicializamos. Esto evita que el script se cargue múltiples veces.
    if (window.fbq) return;

    (function(f: Window, b: Document, e: string, v: string)
    {if(f.fbq)return;const n=f.fbq=function(...args: unknown[]){if(n.callMethod)
    {n.callMethod(...args);}else{n.queue.push(args);}} as FacebookPixel;
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=true;n.version='2.0';
    n.queue=[];const t=b.createElement(e) as HTMLScriptElement;t.async=true;
    t.src=v;const s=b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t,s)})(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    // TS keeps window.fbq narrowed to undefined from the early return above,
    // but the snippet has just defined it.
    const fbq = window.fbq as FacebookPixel | undefined;

    // Inicializamos el Píxel y enviamos el evento PageView
    fbq?.('init', '1554415025547295');
    fbq?.('track', 'PageView');

  }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez.

  return (
    
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1554415025547295&ev=PageView&noscript=1"
      />
    </noscript>
  );
}

export default MetaPixelScript;
