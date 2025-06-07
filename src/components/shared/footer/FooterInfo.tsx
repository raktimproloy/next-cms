import React from 'react'
import domainStore from '@/store/storage/domainStore';
import { fetchDataFromServer } from '@/utils/fatchApi';
import { API_HOST } from '@/utils/BaseApp';

async function FooterInfo() {
    const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
    const hostName: string = domainStore();
    const hostNameCondition = hostName.includes("nextctl.co.uk");
  return (
    <div className="single-footer-contact single-footer">
        <h3 className="font-f-2 font-20 weight-700 line-height-20">
            Get in touch
        </h3>
        <div className="padding-left20">
            <div className="hadding1">
            <p style={{margin:"0px"}}>
                {hostNameCondition ? setting?.uk_address : setting?.address} {" "}
                {hostNameCondition ? setting?.uk_city : setting?.city}, {" "}
                {hostNameCondition ? setting?.uk_country : setting?.country}
            </p>
        </div>
        <div className="space20"></div>

        <div className="foonter-contact3">
            <div className="foonter-contact-icon3">
            <div className="">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7161 10.5022C13.7365 10.5022 12.7747 10.349 11.8633 10.0478C11.4166 9.89542 10.8676 10.0352 10.595 10.3151L8.79598 11.6732C6.70961 10.5595 5.42444 9.27475 4.32595 7.20404L5.64407 5.45188C5.98653 5.10988 6.10936 4.61029 5.96219 4.14154C5.65969 3.22529 5.50603 2.26392 5.50603 1.28392C5.50607 0.575958 4.93011 0 4.2222 0H1.28387C0.575957 0 0 0.575958 0 1.28387C0 9.39846 6.60157 16 14.7161 16C15.424 16 16 15.424 16 14.7161V11.786C16 11.0781 15.424 10.5022 14.7161 10.5022Z" fill="#EC2628"/>
            </svg>

            </div>
            </div>
            <div className="foonter-contact-p3">
            <a 
            href={`tel:${hostNameCondition ? setting?.uk_phone : setting?.phone}`}>
                {hostNameCondition ? setting?.uk_phone : setting?.phone}
            </a>
            </div>
        </div>

        <div className="foonter-contact3">
            <div className="foonter-contact-icon3">
            <div className="">
            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.136374 1.06218C2.67537 3.09106 7.13051 6.66047 8.43994 7.77342C8.61572 7.92363 8.80425 8 8.99998 8C9.19531 8 9.38352 7.92435 9.55891 7.77485C10.8695 6.66081 15.3246 3.09106 17.8636 1.06218C18.0217 0.936111 18.0458 0.71451 17.9178 0.560378C17.622 0.204214 17.1809 0 16.7081 0H1.29184C0.819124 0 0.377988 0.204214 0.0821758 0.560412C-0.0458037 0.71451 -0.0217037 0.936111 0.136374 1.06218Z" fill="#EC2628"/>
                <path d="M18.7704 2.03402C18.6301 1.97381 18.465 1.99482 18.3483 2.08676C15.4564 4.34642 11.7656 7.24285 10.6044 8.20734C9.95262 8.74963 9.04808 8.74963 8.39481 8.20662C7.15706 7.17868 3.01239 3.93097 0.651715 2.08673C0.534189 1.99478 0.368756 1.9745 0.229596 2.03398C0.0896934 2.09387 0 2.22286 0 2.36502V11.5406C0 12.3455 0.710088 13 1.58335 13H17.4167C18.2899 13 19 12.3455 19 11.5406V2.36502C19 2.22286 18.9103 2.09353 18.7704 2.03402Z" fill="#EC2628"/>
            </svg>
            </div>
            </div>
            <div className="foonter-contact-p3">
            <a href={`mailto:${setting?.email}`}>
                {setting?.email}
            </a>
            </div>
        </div>
        
        </div>


    </div>
  )
}

export default FooterInfo