import CartPage from '@/app/cart/_components';
import PageLayout from '@/components/ui/Layouts/pageLayout';
import { ProductService } from '@/lib/services/product/product.service';
import { TypeProductDataFilters } from '@/lib/services/product/product.types';

async function getProduct(searchParams: TypeProductDataFilters) {
  const data = await ProductService.getAll(searchParams);
  return data;
}
export const revalidate = 2400;

export default async function Cart({
  searchParams,
}: {
  searchParams: TypeProductDataFilters;
}) {
  const data = await getProduct(searchParams);

  return (
    <PageLayout>
      <CartPage products={data.products} />
    </PageLayout>
  );
}
