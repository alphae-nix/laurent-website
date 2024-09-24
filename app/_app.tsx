import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL as string;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID as string;

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (MATOMO_URL && MATOMO_SITE_ID) {
            init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
        }
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;