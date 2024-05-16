import React, { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import {
  StyledImage,
  StyledSection,
  ProductTitle,
  DurationContainer,
  DurationValue,
  InfoContainer,
  ProductHeader,
  DescriptionText,
  ReviewContainer,
  ReviewAuthor,
  PriceText,
  ReviewsText,
  LeaveReviewButton,
  ProductReviewsWrapper
} from './styles';
import ProductRating from '@/components/ui/Rating';
import AddToCartButton from '@/components/ui/Button/AddToCartButton';
import SimilarProducts from '../../../../components/SimilarProducts';
import LeaveReviewForm from '../LeaveReviewForm';
import { useAuth } from '@/lib/hooks/useAuth';
import Modal from '@/components/ui/Modal';
import NotFoundText from '@/components/ui/NotFoundText';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Role } from '@/lib/redux/user/user.interface';

export default function AboutProduct({ product }: { product: any }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div>
      <StyledSection>
        <StyledImage
          width={400}
          height={400}
          src={product?.image}
          alt={product?.name}
        />
        <InfoContainer>
          <ProductTitle>{product?.name}</ProductTitle>
          <ProductRating reviews={product?.reviews} />
          <DurationContainer>
            <FaRegClock />
            <DurationValue>{product?.time} min</DurationValue>
          </DurationContainer>
          <ProductHeader>Description</ProductHeader>
          <DescriptionText>{product?.description}</DescriptionText>
          <PriceText>{product?.price}$</PriceText>
          {user && user?.role == Role.USER && <AddToCartButton product={product} />}
          {!user && <Link href='/explore'><Button color="disabled" label='register to buy the product' /></Link> }
        </InfoContainer>
      </StyledSection>
      {user?.role == Role.USER && (
        <>
          <ProductHeader>Similar products</ProductHeader>
          <SimilarProducts productId={product?.id} />
        </>
      )}
      <ProductReviewsWrapper>
      <ProductHeader>Customer Reviews</ProductHeader>
      {user && user.role == Role.USER && (
        <LeaveReviewButton onClick={() => setModalOpen(true)}>
          Leave a review
        </LeaveReviewButton>
      )}

        <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
          <LeaveReviewForm productId={product?.id} />
        </Modal>
    
      {product?.reviews.length > 0 ? (
        product?.reviews.map((review: any) => (
          <ReviewContainer key={review.id}>
            <ReviewAuthor>{review.user.email}</ReviewAuthor>
            <ProductRating reviews={product?.reviews} />
            <ReviewsText>{review.text}</ReviewsText>
          </ReviewContainer>
        ))
      ) : (
        <NotFoundText text="No reviews yet."/>
      )}
      </ProductReviewsWrapper>
    </div>
  );
}
