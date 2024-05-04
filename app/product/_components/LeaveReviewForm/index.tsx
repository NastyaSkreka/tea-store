import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ReviewService } from '@/lib/services/review.service';
import { IReview } from '@/lib/types/review.interface';
import { Rating } from 'react-simple-star-rating';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import {
  SuccessText,
  ButtonContainer,
  ReviewForm,
  ReviewTextArea,
} from './styles';

export default function LeaveReviewForm({ productId }: any) {
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IReview>({
    mode: 'onChange',
  });

  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation({
    mutationKey: ['leave review'],
    mutationFn: (data: IReview) => ReviewService.leave(productId, data),
    onSuccess: () => {
      queryClient.refetchQueries(
        { queryKey: ['get product by id '] },
        productId,
      );
    },
  });

  if (isSuccess)
    return <SuccessText>Review successfully published!</SuccessText>;

  const onSubmit: SubmitHandler<IReview> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <ReviewForm onSubmit={handleSubmit(onSubmit)}>
      <ReviewTextArea
        {...formRegister('text', {
          required: 'Text is required',
        })}
        placeholder="Your text here..."
      />
      <Controller
        control={control}
        name="rating"
        render={({ field: { onChange, value } }) => (
          <Rating
            onClick={onChange}
            initialValue={value}
            size={20}
            transition
          />
        )}
        rules={{
          required: 'Rating is required',
        }}
      />
      {Object.entries(errors) && (
        <ul>
          {Object.entries(errors).map(([_, error]) => (
            <li>{error?.message}</li>
          ))}
        </ul>
      )}
      <ButtonContainer>
        <Button color="white" label="Leave review" />
      </ButtonContainer>
    </ReviewForm>
  );
}
