'use client';
import TeaCatalog from '../ui/Catalog';
import Pagination from '../ui/Pagination';
import SelectComponent from '@/components/ui/Select';
import { useFilters } from '@/lib/hooks/useFilters';
import { EnumProductSort } from '@/lib/services/product/product.types';
import Filters from '../ui/Filters';
import {
  ExplorerContainer,
  FiltersContainer,
  CatalogContainer,
} from './styles';
import { SORT_SELECT_DATA } from '@/lib/types/sort-select.data';

export default function ProductExplorer({ initialProducts }: any) {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <div>
      <ExplorerContainer>
        <FiltersContainer>
          <Filters />
        </FiltersContainer>
        <CatalogContainer>
          <SelectComponent<EnumProductSort>
            data={SORT_SELECT_DATA}
            onChange={(value) =>
              updateQueryParams('sort', value.key.toString())
            }
            value={SORT_SELECT_DATA.find(
                (value) => value.key === queryParams.sort,
              ) || SORT_SELECT_DATA[0]}   
            title="Sort by"
          />
          <TeaCatalog products={initialProducts.products} />
        </CatalogContainer>
      </ExplorerContainer>
      <Pagination
        changePage={(page) => updateQueryParams('page', page.toString())}
        currentPage={queryParams.page}
        numberPage={initialProducts.length / +queryParams.perPage}
      />
    </div>
  );
}
