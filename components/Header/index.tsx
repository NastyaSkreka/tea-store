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
  IconContainer
} from './styles';
import FavouritesSidebar from '../ui/Sidebars/FavoritesSidebar';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useCategories } from '@/lib/hooks/useCategories';
import { useAuth } from '@/lib/hooks/useAuth';
import Link from 'next/link';
import SearchInput from '../ui/SearchInput';
import {
  ADMIN_PANEL_DASHBOARD_URL,
  ADMIN_PANEL_URL,
} from '@/lib/constants/url.contants';
import Logo from '@/public/logo';
import { useActions } from '@/lib/hooks/useActions';
import { Role } from '@/lib/redux/user/user.interface';


export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const { category } = useCategories();
  const pathname = usePathname();
  const { logout } = useActions();
  const isActive = (path: string) => path === pathname;

  const handleUserIconClick = () => {
    
      router.push(
        !user || user.role === Role.USER ? ADMIN_PANEL_URL : ADMIN_PANEL_DASHBOARD_URL,
      );
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NavContainer>
            <Link href='/'>
            <Logo/>
            </Link>
          {category?.data.map((cat) => (
            <StyledNavLink
              isActive={isActive(`/category/${cat.slug}`)}
              key={cat.id}
              href={`/category/${cat.slug}`}
            >
              {cat.name}
            </StyledNavLink>
          ))}
        </NavContainer>
        <SearchInput />
        <ActionsContainer>
          <MdAdminPanelSettings onClick={() => handleUserIconClick()} />
          <IconContainer>
          {user && user.role == Role.USER && (
            <CiHeart onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          )}
          </IconContainer>
          {isSidebarOpen && (
            <FavouritesSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          )}
          <IconContainer>
          {user && user.role == Role.USER && (
            <Link href="/cart">
              <PiShoppingCartSimpleThin />
            </Link>
          )}
          </IconContainer>
          <UserIcon onClick={() => setIsOpen(!isOpen)} />
            <UserMenu isOpen={isOpen}>
              <UserMenuItem >
                <UserText>{user ? 'Exit' : 'Enter'}</UserText>
                {user ? 
                <ExidIcon onClick={() => logout()}/>
                 : 
                 <EnterIcon onClick={() => router.push('/explore')}/>
                }
              </UserMenuItem>
            </UserMenu>
        </ActionsContainer>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
