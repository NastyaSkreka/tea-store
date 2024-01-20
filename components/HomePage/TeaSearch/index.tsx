import React from 'react';
import FilterICon from '@/public/filter-icon';
import {
    TeaShopSection, 
    Title, 
    SearchContainer, 
    SearchInput, 
    FilterIconContainer, 
    FilterIconBackground,
} from './styles';

export default function TeaSearch() {
  return (
    <TeaShopSection>
      <Title>Find a tea shop anywhere</Title>
      <SearchContainer>
        <div>
          <SearchInput type="text" placeholder="Search" />
        </div>
        <FilterIconContainer>
          <FilterIconBackground>
            <FilterICon />
          </FilterIconBackground>
        </FilterIconContainer>
      </SearchContainer>
    </TeaShopSection>
  );
}
