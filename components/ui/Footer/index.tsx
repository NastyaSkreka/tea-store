"use client"

import { LuHome } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import {
    FooterNav,
    IconsContainer,
    NavItem
} from './styles'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
    {id: 1, icon: <LuHome color="var(--backgroundGrayDark-color)"/>, path: '/'}, 
    {id: 2, icon: <CiHeart color="var(--backgroundGrayDark-color)"/>, path: '/favourites'}, 
    {id: 3, icon: <CiBookmark color="var(--backgroundGrayDark-color)"/>, path: '/cart'}, 
    {id: 4, icon: <FiUser color="var(--backgroundGrayDark-color)"/>, path: '/explore'}, 
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
