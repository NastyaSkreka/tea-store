"use client"
import TeaCatalog from "@/components/ui/Catalog";
import PageLayout from "@/components/ui/Layouts/pageLayout";
import { MainContent } from "@/lib/globals";
import { ProductService } from "@/lib/services/product/product.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Category() {
     const { slug } = useParams<{ slug: string }>();

    const { data: products } = useQuery({
      queryKey: ['get products by category'],
      queryFn: () => ProductService.getByCategory(slug)
    });
    
    return (
      <PageLayout>
        <MainContent>
        { products &&  <TeaCatalog products={products?.data}/> }
        </MainContent>
      </PageLayout>
    );
  }