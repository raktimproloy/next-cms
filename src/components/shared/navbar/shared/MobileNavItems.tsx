import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from '@/services/icon/Icon';

interface SubItem {
  subTitle: string;
  subLink: string;
}

interface MenuItem {
  link_type: string;
  order: number;
  menu_slug: string;
  _id: string;
  link?: Object;
  sub?: SubItem[];
}

interface Props {
  order: string;
  title: string;
  link: string;
  activeLink: string;
  items?: MenuItem[];
  setOpenSideBar: Function;
}

function MobileNavItems({ title, link, activeLink, items, order, setOpenSideBar }: Props) {
  const [openChild, setOpenChild] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const path = usePathname();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (items && items?.length > 0) {
      setHeight(items.length * 45);
    }
  }, [items]);

  const handleChildClick = () => {
    setOpenChild(!openChild);
    if (!openChild) {
      setOpenSub(false); // Close all other openSub when opening a new child
    }
  };

  const handleSubItemClick = () => {
    setOpenSub(!openSub);
  };

  return (
    <li>
      <Link
        href={link?.length < 1 ? '' : link === 'home' ? '/' : `/${link}`}
        target={link?.includes('http') ? '_blank' : ''}
        className={`d-flex justify-content-between align-items-center ${path === activeLink && 'activeColor'}`}
        onClick={() => {
          if (items) {
            handleChildClick();
          } else {
            setOpenSideBar(false);
          }
        }}
      >
        <span>{title}</span>
        {items && items?.length > 0 ? openChild ? <FaMinus /> : <FaPlus /> : ''}
      </Link>
      {items && items?.length > 0 && (
        <ul
          className="sub-menu overflow-hidden d-block"
          style={{
            maxHeight: openChild ? (openSub ? `${height + height * items?.length}px` : `${height}px`) : '0px',
            transition: 'max-height .3s ease-in-out',
          }}
        >
          {items.map((item: any, index: any) => (
            <li key={index}>
              <Link
                href={item?.items?.length > 0 ? '' : item?.menu_slug}
                className={`d-flex justify-content-between align-items-center`}
                onClick={handleSubItemClick}
              >
                {item?.title}
                {item && item?.items?.length > 0 ? openSub ? <FaMinus /> : <FaPlus /> : ''}
              </Link>
              {item && item?.items?.length > 0 && (
                <ul
                  className="sub-menu overflow-hidden d-block"
                  style={{ maxHeight: openSub ? `${height}px` : '0px', transition: 'max-height .3s ease-in-out' }}
                >
                  {item?.items.map((subItem: any, subIndex: any) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem?.menu_slug}
                        className={`d-flex justify-content-between align-items-center`}
                      >
                        {subItem?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default MobileNavItems;
