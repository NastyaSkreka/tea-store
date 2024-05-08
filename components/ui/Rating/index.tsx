import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { RatingContainer } from './styles'
import { IReview } from '@/lib/types/review.interface';


export default function ProductRating({ reviews }: {reviews: IReview[]}) {
    console.log("product =>", reviews)
  const [rating, setRating] = useState<number>(
    Math.round(
        reviews?.reduce((acc: number, review: IReview) => acc + review.rating, 0) /
        reviews?.length
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
