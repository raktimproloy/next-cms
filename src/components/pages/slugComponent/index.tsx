// Import necessary modules and components
import React from 'react';
import GrapesJsPage from "@/components/pages/grapesjs";
import NotFound from "@/components/pages/404"


async function Index({ slug, data }:any) {

  let pageInfo = {
    slug: "",
    active: false,
    breadcrumb: "",
    template_category: "",
    template: "",
    perams: ""
  }
  const slugArray = slug.slice("/")

  if(slugArray.length === 1 
    // || slugArray.length === 2
    ){
    data.length > 0 && data.map((info:any) => {
      if(info.slug === slug[0]){
        pageInfo = {
          slug: info.slug,
          active: info.active,
          breadcrumb: info.breadcrumb,
          template_category: info.template_category.toLowerCase(),
          template: info.template,
          perams: slugArray[1] && ""
        }
      }
    })
  }else if(slugArray[0] === "blog"){
    if(slugArray.length === 3 || slugArray.length === 4){
      if(slugArray[1] === "details"){
        pageInfo = {
          slug: "blog/details/default",
          active: true,
          breadcrumb: "active",
          template_category: "predesign",
          template: "blog/view",
          perams: ""
        }
      }else if(slugArray[1] === "tag"){
        pageInfo = {
          slug: "blog/tag/default",
          active: true,
          breadcrumb: "active",
          template_category: "predesign",
          template: "blog",
          perams: ""
        }
      }else if(slugArray[1] === "category"){
        pageInfo = {
          slug: "blog/category/default/page",
          active: true,
          breadcrumb: "active",
          template_category: "predesign",
          template: "blog",
          perams: ""
        }
      }else if(slugArray[1] === "search"){
        pageInfo = {
          slug: "blog/search/default",
          active: true,
          breadcrumb: "active",
          template_category: "predesign",
          template: "blog",
          perams: ""
        }
      }else if(slugArray[1] === "page"){
        pageInfo = {
          slug: "blog/page/default",
          active: true,
          breadcrumb: "active",
          template_category: "predesign",
          template: "blog",
          perams: ""
        }
      }
    }
  }
  

  let DynamicPage = null;

  if (
    pageInfo &&
    pageInfo.active === true &&
    pageInfo.template_category.length > 0 &&
    pageInfo.template_category === "predesign" &&
    pageInfo.template.length > 0
  ) {
    try {
      const dynamicPageModule = await import(`@/components/pages/${pageInfo.template}`);
      console.log("Predesign Page Loaded:", dynamicPageModule);
      DynamicPage = dynamicPageModule.default || null;
    } catch (error) {
      console.error("Error loading page module:", error);
      DynamicPage = null;
    }
  }

  return (
    <>
      <div>
          {pageInfo.active
          ? pageInfo.template_category.toString() === "designer"
            ? <GrapesJsPage slug={slug} pageInfo={pageInfo} />
            : (
              <>
                {DynamicPage ? <DynamicPage /> : <NotFound />}
              </>
            )
            // error
          : <NotFound />
          }
      </div>
    </>
  );
}

export default Index;




