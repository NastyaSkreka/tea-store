import ProductExplorer from '@/components/Explorer';
import Banner from '@/components/ui/Banner';
import PageLayout from '@/components/ui/Layouts/pageLayout';
import { ProductService } from '@/lib/services/product/product.service';
import { TypeProductDataFilters } from '@/lib/services/product/product.types';
import banner from '@/public/image/image1.png';

async function getProduct(searchParams: TypeProductDataFilters) {
  const data = await ProductService.getAll(searchParams);
  return data;
}
export const revalidate = 2400;

export default async function Main({
  searchParams,
}: {
  searchParams: TypeProductDataFilters;
}) {
  const data = await getProduct(searchParams);

  return (
    <PageLayout>
      <Banner
        title="Unique collection Tea"
        image={banner}
        position="textFirst"
      />
      <ProductExplorer initialProducts={data} />
    </PageLayout>
  );
}
