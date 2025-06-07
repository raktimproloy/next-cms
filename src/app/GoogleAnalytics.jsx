// app/GoogleAnalytics.jsx
import Script from "next/script";
import { GA_TRACKING_ID } from "./gtag";  // Import only what you need from gtag
import { API_HOST } from "@/utils/BaseApp";
import { fetchDataFromServer } from "@/utils/fatchApi";


 const GoogleAnalytics = async() => {
    const setting = await fetchDataFromServer(`${API_HOST}setting/get`);

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${setting?.google_analytics_id}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${setting?.google_analytics_id}', {
                        page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;
