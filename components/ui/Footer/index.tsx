"use client"

import Home from '@/public/home-icon';
import Heart from '@/public/heart-icon';
import Favorites from '@/public/fav-icon';
import User from '@/public/user-icon';
import {
    FooterNav,
    IconsContainer,
    NavItem
} from './styles'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
    {id: 1, icon: <Home/>, path: '/'}, 
    {id: 2, icon: <Heart/>, path: '/heart'}, 
    {id: 3, icon: <Favorites/>, path: '/cart'}, 
    {id: 4, icon: <User />, path: '/user'}, 
]


export default function Footer() {
    const pathname = usePathname();

  return (
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
 
  );
}
