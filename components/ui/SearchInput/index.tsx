'use client';
import {
  SearchContainer,
  StyledSearchInput,
  SearchIcon,
  FoundedItemsContainer,
} from './styles';
import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/lib/services/product/product.service';
import { useFilters } from '@/lib/hooks/useFilters';
import { useState } from 'react';
import TeaFavoriteItem from '../Sidebars/FavoritesSidebar/TeaFavoriteItem';

export default function SearchInput() {
  const { queryParams, updateQueryParams } = useFilters();
  const [searchTerm, setSearchTerm] = useState<string>(
    queryParams.searchTerm || '',
  );

  const { data } = useQuery({
    queryKey: ['get products'],
    queryFn: () => ProductService.getAll(queryParams),
    enabled: !!queryParams,
  });

  const filteredProducts = data?.products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <SearchContainer>
        <StyledSearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <SearchIcon
          onClick={() => updateQueryParams('searchTerm', searchTerm)}
        />
      </SearchContainer>
      <FoundedItemsContainer>
        {searchTerm &&
          filteredProducts
            ?.slice(0, 3)
            .map((product) => (
              <TeaFavoriteItem key={product.id} product={product} />
            ))}
      </FoundedItemsContainer>
    </>
  );
}
