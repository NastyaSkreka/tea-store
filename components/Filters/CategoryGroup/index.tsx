import { useCategories } from '@/lib/hooks/useCategories';
import { useFilters } from '@/lib/hooks/useFilters';
import FilterWrapper from '../FilterWrapper';
import Checkbox from '@/components/ui/Checkbox';

export default function CategoryGroup() {
  const { queryParams, updateQueryParams } = useFilters();
  const { category } = useCategories();

  return (
    <FilterWrapper title="Categories">
      {category?.data.map((category) => {
        const isChecked = queryParams.categoryId === category.id.toString();

        return (
          <Checkbox
            isChecked={isChecked}
            onClick={() =>
              updateQueryParams(
                'categoryId',
                isChecked ? '' : category.id.toString(),
              )
            }
            key={category.id}
          >
            {category.name}
          </Checkbox>
        );
      })}
    </FilterWrapper>
  );
}
