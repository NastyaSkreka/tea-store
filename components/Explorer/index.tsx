'use client';
import TeaCatalog from '../Catalog';
import Pagination from '../Pagination';
import SelectComponent from '@/components/ui/Select';
import { useFilters } from '@/lib/hooks/useFilters';
import { EnumProductSort } from '@/lib/services/product/product.types';
import Filters from '../Filters';
import {
  ExplorerContainer,
  FiltersContainer,
  CatalogContainer,
} from './styles';
import { SORT_SELECT_DATA } from '@/lib/types/sort-select.data';
import NotFoundText from '../ui/NotFoundText';
import { TypePaginationProducts } from '@/lib/types/product.interface';
import Loader from '../ui/Loader';

export default function ProductExplorer({
  initialProducts,
  isLoading,
}: {
  initialProducts: TypePaginationProducts;
  isLoading: any;
}) {
  const { queryParams, updateQueryParams } = useFilters();

  console.log("queryParams perPage =>", queryParams)

  const isProductsEmpty = initialProducts.products.length === 0;
  return (
    <>
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
            value={
              SORT_SELECT_DATA.find(
                (value) => value.key === queryParams.sort,
              ) || SORT_SELECT_DATA[0]
            }
            title="Sort by"
          />
          {isLoading ? (
            <Loader />
          ) : isProductsEmpty ? (
            <NotFoundText text="Products not found" />
          ) : (
            <TeaCatalog products={initialProducts.products} />
          )}
        </CatalogContainer>
      </ExplorerContainer>
      <Pagination
        changePage={(page) => updateQueryParams('page', page.toString())}
        currentPage={queryParams.page}
        numberPage={initialProducts.length / +queryParams.perPage}
      />
    </>
  );
}
