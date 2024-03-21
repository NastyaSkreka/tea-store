'use client'
import React from 'react';
import {
    FeaturedTeaSection, 
    FeaturedTeaTitle,
    TeaShopListContainer, 
} from './styles'

interface TeaFeaturedProps {
    searchTerm: string;
  }

  // TODO: add data from server
export default function TeaFeatured({searchTerm}:TeaFeaturedProps) {

   // const [filteredData, setFilteredData] = useState<any[]>([]);
   // const { data, error, isLoading } = useGetTeasQuery('');


 /* useEffect(() => {
    handleSearch(searchTerm);
    }, [searchTerm, data]); 

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredData(data ?? []); 
      return;
    }
  
    const filtered = (data ?? []).filter((teaItem: any) => 
        teaItem.name && teaItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredData(filtered);
  };

  

  if (isLoading) {
    return <div>Loading...</div>;
  }
*/
  return (
    <FeaturedTeaSection>
      <FeaturedTeaTitle>Featured tea shops</FeaturedTeaTitle>
      <TeaShopListContainer>
    {/*  {filteredData &&
          filteredData.map((teaShop: any, index: number) => (
                <TeaShopItem key={index} {...teaShop} />
          ))}
        */ }
      </TeaShopListContainer>
    </FeaturedTeaSection>
  );
}
