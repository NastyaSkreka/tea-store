import Link from 'next/link';
import styled from 'styled-components';

export const CartHeadline = styled.div`
    margin: 20px 0px;
    font-size: 30px;
    color: var(--primary-color);

`

export const TableHeader = styled.th`
   font-size: 18px;
   font-weight: 600;
   text-align: left;
   margin-bottom: 5px;
`

export const CartContainer = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 80%;
  
`
export const TotalPriceValue = styled.div`
    margin: 20px 0;
    font-weight: 700;
    font-size: 18px;
`;

export const SimilarProductsContainer = styled.div`
    margin: 30px 0;
    display: flex;
    gap: 30px;
`
export const Title = styled.div`
     font-weight: 600;
     font-size: 18px;
     color: var(--primary-color);
     margin: 20px 0;
`


export const EmptyCartInfo = styled.div`
    
`

export const CatalogLink = styled(Link)`
    text-decoration: underline;
    color: var(--primary-color);
    font-size: 24px;
`
