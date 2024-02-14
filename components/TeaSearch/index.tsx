import React from 'react';
import { Section, Title, SearchContainer, Input, FilterButton } from './styles';
import FilterIcon from '@/public/filter-icon';

const TeaSearch = () => {
  return (
    <Section>
      <Title>Find a tea shop anywhere</Title>
      <SearchContainer>
        <div className="relative">
          <Input type="text" placeholder="Search" />
        </div>
        <FilterButton>
          <FilterIcon />
        </FilterButton>
      </SearchContainer>
    </Section>
  );
};

export default TeaSearch;
