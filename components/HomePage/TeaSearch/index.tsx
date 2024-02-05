import React, { useState } from 'react';
import FilterICon from '@/public/filter-icon';
import {
    TeaShopSection, 
    Title, 
    SearchContainer, 
    SearchInput, 
    FilterIconContainer, 
    FilterIconBackground,
} from './styles';

interface TeaSearchProps {
  onSearch: (searchTerm: string) => void;
}

export default function TeaSearch({onSearch}:TeaSearchProps) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      onSearch(event.target.value); 
    }; 
    
  return (
    <TeaShopSection>
      <Title>Find a tea shop anywhere</Title>
      <SearchContainer>
        <div>
          <SearchInput  
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}/>
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
