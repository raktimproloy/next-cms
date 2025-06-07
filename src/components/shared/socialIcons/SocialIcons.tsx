'use client'
import React, { useEffect, useState } from 'react'
import {clientSettingStore, setting} from '@/store/storage/clientSettingStore'

interface Props{
    color?: string,
    bgColor?: string
}

function SocialIcons({color, bgColor} :Props) {
    const [localSetting, setLocalSetting] = useState(setting);
    useEffect(() => {
        if (setting === null) {
          clientSettingStore().then((data) => {
            setLocalSetting(data);
          });
        }
      }, []);

      const getSocialMediaLink = (platform: string) => {
        return localSetting?.socal_media?.[platform] || '';
      };
  return (
    <div className="social social1 " >
            <ul className='d-flex align-items-center'>
                <li className='me-1'>
                    <a href={`${getSocialMediaLink('facebook')}`} target='_blank' style={{background: bgColor}} className='d-flex justify-content-center align-items-center'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="svg-inline--fa fa-facebook-f " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{marginLeft:"2px"}} height="18" width="18"><path fill={color || "#000000"} d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                    </a>
                </li>
                <li className='me-1'>
                    <a href={`${getSocialMediaLink('linkedin')}`} style={{background: bgColor}} className='d-flex justify-content-center align-items-center'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{marginLeft:"2px"}} height="18" width="18">
                            <path fill={color || "#000000"} d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                            </path>
                        </svg>
                    </a>
                </li>
                <li className='me-1'>
                    <a href={`${getSocialMediaLink('pinterest')}`} style={{background: bgColor}} className='d-flex justify-content-center align-items-center'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest" className="svg-inline--fa fa-pinterest " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{marginLeft:"2px"}} height="18" width="18"><path fill={color || "#000000"} d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>
                    </a>
                </li>
                <li className='me-1'>
                    <a href={`${getSocialMediaLink('youtube')}`} style={{background: bgColor}} className='d-flex justify-content-center align-items-center'>
                    <svg viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill={color || "#000000"}  style={{marginLeft:"2px"}} height="20" width="20"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill={color || "#000000"}> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"> </path> </g> </g> </g> </g></svg>
                    </a>
                </li>
            </ul>
            </div>
  )
}

export default SocialIcons