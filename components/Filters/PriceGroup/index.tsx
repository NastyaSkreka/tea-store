
import Range from '@/components/ui/Range';
import { useFilters } from '@/lib/hooks/useFilters';
import FilterWrapper from '../FilterWrapper';


export default function PriceGroup() {
  const { queryParams, updateQueryParams } = useFilters();

  return (
    <FilterWrapper title="Price from/to">
      <Range
        max={2000}
        fromInitialValue={queryParams.minPrice}
        toInitialValue={queryParams.maxPrice}
        onChangeFromValue={(value) => updateQueryParams('minPrice', value)}
        onChangeToValue={(value) => updateQueryParams('maxPrice', value)}
      />
    </FilterWrapper>
  );
}
