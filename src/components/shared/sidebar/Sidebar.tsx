import React from 'react'
import { FaWhatsapp } from '@/services/icon/BrandIcon'
import { fetchDataFromServer } from '@/utils/fatchApi';
import { API_HOST } from '@/utils/BaseApp';
import domainStore from '@/store/storage/domainStore';

async function Sidebar() {
  const setting:any = await fetchDataFromServer(`${API_HOST}setting/get`);
  const hostName: string = domainStore();
  const hostNameCondition = hostName.includes("nextctl.co.uk");
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${hostNameCondition ? setting?.uk_whatsapp : setting?.whatsapp }&text&type=phone_number&app_absent=0`;
  return (
    <div className={`demo-sidebar`} id="demo-sidebar">
      <div className="demo-sidebar-wrap">
        <div className="demo-sidebar-menu">
            <span>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className='sidebarIcon'>
              <FaWhatsapp/>
            </a>
            </span>
        </div>
      </div>
    </div> 
  )
};

export default Sidebar