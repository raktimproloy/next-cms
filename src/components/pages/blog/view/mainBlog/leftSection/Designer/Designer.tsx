import NotFoundPage from "@/components/pages/404"
import React from 'react'
import Style from "./Style";

async function Designer({htmlData}:any) {
    try{
        return (
          <div>
            <Style htmlData={htmlData}/>
            <div dangerouslySetInnerHTML={{ __html: htmlData?.mycustom_html || '<p>Please wait. Blog writing in progress...</p>' }} />
          </div>
        );
      }catch(error){
        return(
          <NotFoundPage/>
        )
      }
}

export default Designer