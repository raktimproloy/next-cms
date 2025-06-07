
import React from 'react';
import { fetchDataFromServer } from "@/utils/fatchApi";
import pathStore from '@/store/storage/pathStore';
import { settingStore } from '@/store/storage/serverSettingStore';
import { API_HOST } from '@/utils/BaseApp';
import { STORAGE_URL } from '@/utils/BaseApp'
import dynamic from 'next/dynamic';
const SlugComponent = dynamic(() => import('@/components/pages/slugComponent'))
const ErrorPage = dynamic(() => import('@/components/shared/error/ErrorPage'))

async function page({ params }: any) {

  const slug = params.slug.map((item:any) => item.toLowerCase());

  try {
    const page = await fetchDataFromServer(`${API_HOST}page/all`);
    pathStore(slug)

    return (
      <div>
        <SlugComponent slug={slug} data={page} />
      </div>
    );
  } catch (error) {
    return <ErrorPage/>;
  }
}

export async function generateMetadata({ params }: any) {
  const slug = params.slug;
  const setting = await fetchDataFromServer(`${API_HOST}setting/get`);
  const defaultMeta = setting?.meta_property

  try {
    const data = await fetchDataFromServer(`${API_HOST}page/all`);

    let metatags:any = {};
    let pageTitle:any = ""

    if(slug[1] === "details" && slug[0] === "blog"){
      const blog = await fetchDataFromServer(`${API_HOST}blog/${slug[2]}`);
      pageTitle = blog?.title
      metatags = blog?.meta_property
    }else{
      data?.map((page: any) => {
        if (page?.slug === slug[0]) {
          pageTitle = page?.title
          metatags = page?.meta_property;
        }
      });
    }
    const defaultOgImage = {
      url: `${STORAGE_URL}${defaultMeta?.og_image}`, // Use the correct property for your default image
      width: 1200, // Set the width of your image
      height: 630, // Set the height of your image
      alt: 'Default Open Graph Image', // Set the alt text for your image
    };
    return{
      metadataBase: new URL('https://cms.nextctl.co.uk/'),

      title: metatags?.title?.length === 0 ? 
      pageTitle + ` - ` + setting?.title
      : metatags?.title ? 
      metatags?.title + ` - ` + setting?.title
      : `404 - ` + setting?.title,

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
        url: metatags?.og_url || slug.join("/").toString(),
        description: metatags?.og_description || defaultMeta?.og_description,
        images: metatags?.og_image ? [`${STORAGE_URL}${metatags?.og_image}`] : [defaultOgImage],
        siteName: metatags?.og_site_name || defaultMeta?.og_site_name,
        type: slug[0] === "blog" && slug[1] === "details" ? "article" : "website",
      },
      twitter: {
        card: metatags?.twitter_card || defaultMeta?.twitter_card,
        title: metatags?.twitter_title || defaultMeta?.twitter_title,
        description: metatags?.twitter_description || defaultMeta?.twitter_description,
        url: metatags?.twitter_url || defaultMeta?.twitter_url,
        images: metatags?.og_image ? [`${STORAGE_URL}${metatags?.og_image}`] : [defaultOgImage],
      }
    }
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
        url: defaultMeta?.og_url,
        description: defaultMeta?.og_description,
        images: `${STORAGE_URL}${defaultMeta?.og_image}`,
        siteName: defaultMeta?.og_site_name,
        type: slug[0] === "blog" && slug[1] === "details" ? "article" : "website"
      },
      twitter: {
        card: defaultMeta?.twitter_card,
        title: defaultMeta?.twitter_title,
        description: defaultMeta?.twitter_description,
        url: defaultMeta?.twitter_url
      }
    } 
  }
}

export default page;

