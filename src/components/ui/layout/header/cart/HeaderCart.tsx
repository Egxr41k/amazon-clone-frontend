'use client';

import { FC } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

import SquareButton from '@/ui/button/SquareButton';

import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';

import { convertPrice } from '@/utils/convertPrice';

import styles from './Cart.module.scss';
import CartItem from './cart-item/CartItem';

const HeaderCart: FC = () => {
  const { isShow, setIsShow, ref } = useOutside(false);

  const { items, total } = useCart();

  // const { reset } = useActions();

  // const { push } = useRouter();

  // const { mutate } = useMutation(
  //   ['create order and payment'],
  //   () =>
  //     OrderService.place({
  //       items: items.map((item) => ({
  //         price: item.price,
  //         quantity: item.quantity,
  //         productId: item.product.id,
  //       })),
  //     }),
  //   {
  //     onSuccess() {
  //       reset();
  //       //push(data.confirmation.confirmation_url);
  //     },
  //   },
  // );

  return (
    <div className="relative" ref={ref}>
      <SquareButton
        Icon={RiShoppingCartLine}
        onClick={() => {
          setIsShow(!isShow);
        }}
        number={items.length}
      />

      {isShow && (
        <div className={styles.cartWrapper}>
          <div className="font-normal text-lg mb-5">My cart</div>

          <div className={styles.cart}>
            {items.length ? (
              items.map((item) => <CartItem item={item} key={item.id} />)
            ) : (
              <div className="font-light">Cart is empty!</div>
            )}
          </div>

          <div className={styles.footer}>
            <div>Total:</div>
            <div>{convertPrice(total)}</div>
          </div>
          <div className="text-center">
            {!!items.length && (
              <div className="text-center mt-7 mb-5">
                <link className="btn btn-white" href="/checkout">
                  Go to checkout
                </link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderCart;
