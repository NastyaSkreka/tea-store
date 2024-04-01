import { IProduct } from '@/lib/types/product.interface';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { RatingContainer, Reviews} from './styles'
import { IReview } from '@/lib/types/review.interface';


export default function ProductRating({ product }: {product: IProduct}) {
  const [rating, setRating] = useState<number>(
    Math.round(
      product?.reviews.reduce((acc: number, review: IReview) => acc + review.rating, 0) /
        product?.reviews?.length
    ) || 0,
  );

  return (
    <RatingContainer>
      <Rating
        readonly
        initialValue={rating}
        SVGstyle={{
          display: 'inline-block',
        }}
        size={15}
        allowFraction
        transition
      />
   {/*<RatingCount>{rating}</RatingCount> */} 
  {/*  <Reviews>{product.reviews?.length} reviews</Reviews>*/}   
    </RatingContainer>
  );
}
