import React from 'react';

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

interface IProps  {
  variant?: 'nav' | 'btn-full' | 'btn-border';
}

const checkVariant = (variant?: 'nav' | 'btn-full' | 'btn-border') => {
  switch (variant) {
    case 'nav':
      return  <FooterNav>
      <IconsContainer>
        <NavItemActive>
          <Home />
        </NavItemActive>
        <NavItem>
          <Heart />
        </NavItem>
        <NavItem>
          <Favorites />
        </NavItem>
        <NavItem>
          <User />
        </NavItem>
      </IconsContainer>
    </FooterNav>

    case 'btn-full':
      return <Button color="green" label="Add to chart" />
          
    case 'btn-border':
      return <Button color="white" label="Explore" />
    default:
      return null
  }
}

export default function Footer({variant}: IProps) {

  return (
    <FooterContainer>
      { checkVariant(variant) }
    </FooterContainer>
  );
}
