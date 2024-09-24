import {useEffect} from 'react';
import type {AppProps} from 'next/app';

function MyApp({Component, pageProps}: AppProps) {
    useEffect(() => {
        const matomoScript = document.createElement("script");
        matomoScript.innerHTML = `
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.delatte.ovh/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
        `;
        document.head.appendChild(matomoScript);
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
