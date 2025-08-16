import { useEffect } from 'react';


function MetaPixelScript() {
  // Usamos useEffect para asegurarnos de que el código se ejecute
  // solo después de que el componente se haya montado en el navegador.
  useEffect(() => {
    // Verificamos si la función del Píxel (fbq) ya existe.
    // Si no existe, la inicializamos. Esto evita que el script se cargue múltiples veces.
        /* global fbq */
    if (window.fbq) return;

    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    // Inicializamos el Píxel y enviamos el evento PageView
    fbq('init', '1554415025547295');
    fbq('track', 'PageView');

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
