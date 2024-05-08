import { ICartItem } from '@/lib/types/cart.interface';
import {
  PaymentTeaItemContainer,
  TeaImage,
  TeaInfoContainer,
  TeaTitle,
  TeaText,
} from './styles';

export default function PaymentItem({ item }: { item: ICartItem }) {
  return (
    <PaymentTeaItemContainer>
      <TeaImage width={120}  height={100} src={item.product.image} alt="banner" />
      <TeaInfoContainer>
        <TeaTitle>{item.product.name}</TeaTitle>
        <TeaText>Price - {item.price} $</TeaText>
        <TeaText>Quantity - {item.quantity}</TeaText>
      </TeaInfoContainer>
    </PaymentTeaItemContainer>
  );
}
