// Import necessary modules and types
import HeroSection from '@/components/shared/heroSection/HeroSection';
import { fetchDataFromServer } from '@/utils/fatchApi';
import Style from './Style';
import { API_HOST } from '@/utils/BaseApp';
import NotFoundPage from "@/components/pages/404"

const Index = async ({ slug, pageInfo }: any) => {
  try{
    const htmlData = await fetchDataFromServer(`${API_HOST}api/pages/${slug}/content`);
    return (
      <div style={{marginTop: `${pageInfo.breadcrumb === "active"? "" : "5rem"}`}}>
        <Style slug={slug} htmlData={htmlData}/>
        {pageInfo.breadcrumb === "active" && <HeroSection/>}
        <div dangerouslySetInnerHTML={{ __html: htmlData?.mycustom_html || '' }} />
      </div>
    );
  }catch(error){
    return(
      <NotFoundPage/>
    )
  }
};


export default Index;
