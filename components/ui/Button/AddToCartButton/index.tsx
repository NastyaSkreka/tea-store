import { useActions } from '@/lib/hooks/useActions';
import { useCart } from '@/lib/hooks/useCart';
import Button from '..';
import { IProduct } from '@/lib/types/product.interface';

export default function AddToCartButton({ product }: { product: IProduct }) {
  if (!product) return;

  const { addToCard, removeFromCart } = useActions();
  const { items } = useCart();

  const isInCart = items.some((cartItem) => cartItem.product.id === product.id);

  const handleButtonClick = () => {
    if (isInCart) {
      const cartItem = items.find(
        (cartItem) => cartItem.product.id === product.id,
      );
      if (cartItem) {
        removeFromCart({ id: cartItem.id });
      }
    } else {
      addToCard({
        product,
        quantity: 1,
        price: product.price,
      });
    }
  };

  return (
    <Button
      color={isInCart ? 'white' : 'green'}
      label={isInCart ? 'Remove from cart' : 'Add to cart'}
      onClick={handleButtonClick}
    />
  );
}
