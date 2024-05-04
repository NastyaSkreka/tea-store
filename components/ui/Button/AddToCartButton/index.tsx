import { useActions } from '@/lib/hooks/useActions';
import { useCart } from '@/lib/hooks/useCart';
import Button from '..';

export default function AddToCartButton({ product }: { product: any }) {

    if(!product) return 
  const { addToCard, removeFromCart } = useActions();
  const { items } = useCart();

  const currentElement = items.find(
    (cartItem) => cartItem.product.id == product.id,
  );

  return (
    <Button
      color="green"
      label="Add to cart"
      onClick={() =>
        currentElement
          ? removeFromCart({ id: currentElement.id })
          : addToCard({
              product,
              quantity: 1,
              price: product.price,
            })
      }
    />
  );
}
