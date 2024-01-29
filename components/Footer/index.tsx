"use client"
import React, { useEffect, useState } from 'react';

import Home from '@/public/home-icon';
import Heart from '@/public/heart-icon';
import Favorites from '@/public/fav-icon';
import User from '@/public/user-icon';
import {
    FooterNav,
    IconsContainer,
    NavItemActive,
    NavItem, 
    FooterContainer
    
} from './styles'
import Button from '../ui/Button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';



interface IProps  {
  variant?: 'nav' | 'btn-full' | 'btn-border';
}

const navLinks = [
    {id: 1, icon: <Home/>, path: '/'}, 
    {id: 2, icon: <Heart/>, path: '/heart'}, 
    {id: 3, icon: <Favorites/>, path: '/cart'}, 
    {id: 4, icon: <User />, path: '/user'}, 
]


// const checkVariant = (variant?: 'nav' | 'btn-full' | 'btn-border') => {
//     // const { pathname } = useRouter();
//     const pathname = usePathname();

//   switch (variant) {
//     case 'nav':
//       return  <FooterNav>
//          <IconsContainer>
//          {navigation.map(({ id, icon, path }) => (
//                 <Link key={id} href={path} passHref>
//                 <NavItem className={pathname === path ? 'active' : ''}>
//                     {icon}
//                 </NavItem>
//                 </Link>
//             ))}
//     </IconsContainer>
//     </FooterNav>

//     case 'btn-full':
//       return <Button color="green" label="Add to chart" />
          
//     case 'btn-border':
//       return <Button color="white" label="Explore" />
//     default:
//       return null
//   }
// }

const NavLinkItem = () => {

}


export default function Footer({variant}: IProps) {
const pathname = usePathname();

  return (
      <FooterContainer>
        <FooterNav>
    <IconsContainer>
      {navLinks.map((navLink) => (
        <Link key={navLink.id} href={navLink.path} passHref>
            <NavItem className={pathname === navLink.path ? 'active' : ''}>
                {navLink.icon}
            </NavItem>
        </Link>
      ))}

    </IconsContainer>
    </FooterNav>
    </FooterContainer>
  );
}
