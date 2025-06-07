'use client'
import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'


function Style({htmlData}:any) {
    const [cleanHTML, setcleanHtml] = useState(String)
    const [cleanCSS, setCleanCss] = useState(String)
    const [cleanScript, setCleanScript] = useState(String)
    useEffect(() => {
      const css = DOMPurify.sanitize(htmlData?.mycustom_css || '');
      setCleanCss(css)
      setcleanHtml(htmlData?.mycustom_html)
    }, [htmlData])

    useEffect(() => {
        // JavaScript code from the provided HTML
        if (cleanHTML) {
          const splitScript = cleanHTML.split('<script>');
          if(splitScript.length > 1){
            const splitScript2 = splitScript[1].split('</script>');
            setCleanScript(splitScript2[0]);
          }
        }
    
        const script = document.createElement('script');
        script.innerHTML = cleanScript || '';
    
        script.async = true;
        // Append the script to the body
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, [cleanScript, cleanHTML]);

  return (
    <>
        <style jsx>{`${cleanCSS === "" ? "body{padding:0}" : cleanCSS}`}</style>
    </>
  )
}

export default Style