
import dynamic from 'next/dynamic';
import { fetchDataFromServer } from "@/utils/fatchApi";
import { API_HOST } from "@/utils/BaseApp";
import { settingStore } from "@/store/storage/serverSettingStore";
import { STORAGE_URL } from '@/utils/BaseApp'
const ErrorPage = dynamic(() => import('@/components/shared/error/ErrorPage'));
const NotFound = dynamic(() => import('@/app/not-found'));
const HomePage = dynamic(() => import('@/components/pages/home'));
const GrapesJsPage = dynamic(() => import('@/components/pages/grapesjs'));
const HeroSection = dynamic(() => import('@/components/pages/home/heroSection/HeroSection'));

async function Home() {

// Noting
  try {
    const page:any = await fetchDataFromServer(`${API_HOST}page/home`);

    return (
      <div>
        {page.active ? (
          page.template_category === 'Predesign' ? (
            // "home page"
            <HomePage />
          ) : (
            <>
            <HeroSection/>
            <GrapesJsPage slug={page.slug} pageInfo={page} />
            <div className="space40"></div>
            </>
          )
        ) : (
          <NotFound />
        )}
      </div>
    );
  } catch (error) {
    return <ErrorPage />;
  }
}

export async function generateMetadata({ params }: any) {
  const settingData = await settingStore()
  const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
  const defaultMeta = setting?.meta_property

  try {
    const data = await fetchDataFromServer(`${API_HOST}page/home`);

    let metatags:any = data?.meta_property;
    let pageTitle:any = data?.title

    const defaultOgImage = {
      url: `${STORAGE_URL}${defaultMeta?.og_image}`, // Use the correct property for your default image
      width: 1200, // Set the width of your image
      height: 630, // Set the height of your image
      alt: 'Default Open Graph Image', // Set the alt text for your image
    };
    return{
      metadataBase: new URL('https://cms.nextctl.co.uk/'),
      title: metatags?.title?.length === 0 ? setting?.title : metatags?.title,
      description: metatags?.description || defaultMeta?.description,
      keywords: metatags?.keyword || defaultMeta?.keyword,
      icons:{
        icon: [
          {
            media: '(prefers-color-scheme: light)',
            url: `${STORAGE_URL}${setting?.fav_icon}`,
            href: `${STORAGE_URL}${setting?.fav_icon}`,
          },
          {
            media: '(prefers-color-scheme: dark)',
            url: `${STORAGE_URL}${setting?.fav_icon}`,
            href: `${STORAGE_URL}${setting?.fav_icon}`,
          },
        ],
      },
      openGraph: {
        title: metatags?.og_title || defaultMeta?.og_title,
        url: metatags?.og_url || "",
        description: metatags?.og_description || defaultMeta?.og_description,
        images: metatags?.og_image ? [`${STORAGE_URL}${metatags?.og_image}`] : [defaultOgImage],
        siteName: metatags?.og_site_name || defaultMeta?.og_site_name,
        type: "website",
      },
      twitter: {
        card: metatags?.twitter_card || defaultMeta?.twitter_card,
        title: metatags?.twitter_title || defaultMeta?.twitter_title,
        description: metatags?.twitter_description || defaultMeta?.twitter_description,
        // url: metatags?.twitter_url
        images: metatags?.og_image ? [`${STORAGE_URL}${metatags?.og_image}`] : [defaultOgImage],
      }
    }
    // ... your existing code
  } catch (error) {
    // You may want to handle errors more gracefully depending on your use case
    return {
      metadataBase: new URL('https://cms.nextctl.co.uk/'),
      
      title: defaultMeta?.title,
      description: defaultMeta?.description,
      keywords: defaultMeta?.keyword,
      icons:{
        icon: [
          {
            media: '(prefers-color-scheme: light)',
            url: `${STORAGE_URL}${setting?.fav_icon}`,
            href: `${STORAGE_URL}${setting?.fav_icon}`,
          },
          {
            media: '(prefers-color-scheme: dark)',
            url: `${STORAGE_URL}${setting?.fav_icon}`,
            href: `${STORAGE_URL}${setting?.fav_icon}`,
          },
        ],
      },
      openGraph: {
        title: defaultMeta?.og_title,
        url: "",
        description: defaultMeta?.og_description,
        images: `${STORAGE_URL}${defaultMeta?.og_image}`,
        siteName: defaultMeta?.og_site_name,
        type: "website",
      },
      twitter: {
        card: defaultMeta?.twitter_card,
        title: defaultMeta?.twitter_title,
        description: defaultMeta?.twitter_description,
        // url: metatags?.twitter_url
        
      }
    } 
  }
}

export default Home;
