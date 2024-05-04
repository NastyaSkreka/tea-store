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
} from './styles';
import ProductRating from '@/components/ui/Rating';
import AddToCartButton from '@/components/ui/Button/AddToCartButton';
import SimilarProducts from '../../../../components/ui/SimilarProducts';
import LeaveReviewForm from '../LeaveReviewForm';
import { useAuth } from '@/lib/hooks/useAuth';
import Modal from '@/components/ui/Modal';

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
          <DurationContainer>
            <FaRegClock />
            <DurationValue>{product?.time}</DurationValue>
          </DurationContainer>
          <ProductHeader>Description</ProductHeader>
          <DescriptionText>{product?.description}</DescriptionText>
          <PriceText>{product?.price}$</PriceText>
          {user?.role !== 'ADMIN' && <AddToCartButton product={product} />}
        </InfoContainer>
      </StyledSection>
      {user?.role !== 'ADMIN' && (
        <>
          <ProductHeader>Similar products</ProductHeader>
          <SimilarProducts productId={product?.id} />
        </>
      )}
      <ProductHeader>Customer Reviews</ProductHeader>
      {user && user.role !== 'ADMIN' && (
        <LeaveReviewButton onClick={() => setModalOpen(true)}>
          Leave a review
        </LeaveReviewButton>
      )}
      {user && user.role !== 'ADMIN' && (
        <Modal isOpen={isModalOpen} closeModal={() => setModalOpen(false)}>
          <LeaveReviewForm productId={product?.id} />
        </Modal>
      )}
      {product?.reviews.length > 0 ? (
        product?.reviews.map((review: any) => (
          <ReviewContainer key={review.id}>
            <ReviewAuthor>{review.user.email}</ReviewAuthor>
            <ProductRating reviews={product?.reviews} />
            <ReviewsText>{review.text}</ReviewsText>
          </ReviewContainer>
        ))
      ) : (
        <div>No reviews yet.</div>
      )}
    </div>
  );
}
