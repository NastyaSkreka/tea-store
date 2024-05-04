'use client';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartSimpleThin } from 'react-icons/pi';
import { MdAdminPanelSettings } from 'react-icons/md';
import {
  HeaderContainer,
  HeaderWrapper,
  ActionsContainer,
  NavContainer,
  StyledNavLink,
  UserIcon,
  UserMenu,
  UserMenuItem,
  ExidIcon,
  EnterIcon,
  UserText,
} from './styles';
import FavouritesSidebar from '../Sidebars/FavoritesSidebar';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useCategories } from '@/lib/hooks/useCategories';
import { useAuth } from '@/lib/hooks/useAuth';
import Link from 'next/link';
import SearchInput from '../SearchInput';
import { ADMIN_PANEL_DASHBOARD_URL, ADMIN_PANEL_URL } from '@/lib/constants/url.contants';
import { useProfile } from '@/lib/hooks/useProfile';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const { category } = useCategories();
  const { profile } = useProfile();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;


  const handleUserIconClick = () => {
    user && router.push(user.role === 'USER' ? ADMIN_PANEL_URL : ADMIN_PANEL_DASHBOARD_URL)
    
  };
  

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NavContainer>
          {category?.data.map((cat) => (
            <StyledNavLink isActive={isActive(`/category/${cat.slug}`)} key={cat.id} href={`/category/${cat.slug}`}>
              {cat.name}
            </StyledNavLink>
          ))}
        </NavContainer>
        <SearchInput />
        <ActionsContainer>
          <MdAdminPanelSettings  onClick={() => handleUserIconClick()}/>
          {user && user.role !== "ADMIN" && <CiHeart onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>}
          {isSidebarOpen && (
            <FavouritesSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          )}
          {user && user.role !== "ADMIN" && (
            <Link href="/cart">
              <PiShoppingCartSimpleThin />
            </Link>
          )}
          <UserIcon onClick={() => setIsOpen(!isOpen)} />
          {user && (
            <UserMenu isOpen={isOpen}>
              <UserMenuItem onClick={() => router.replace('/explore')}>
                <UserText>{user ? 'Exit' : 'Enter'}</UserText>
                {user ? <ExidIcon /> : <EnterIcon />}
              </UserMenuItem>
            </UserMenu>
          )}
        </ActionsContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
