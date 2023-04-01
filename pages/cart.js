import { useDispatch, useSelector } from "react-redux";
import Header from "../components/cart/header"
import styles from "../styles/cart.module.scss";
import Empty from "../components/cart/empty";
export default function cart() {
  const { cart } = useSelector((state) => ({ ...state }));
  return (
    <>
      <Header />
      <div className={styles.cart}>
        {cart.cartItems.length > 1 ? (
          <div className={styles.cart__container}>
           {cart.cartItems.map((product) => (
                <Product
                  product={product}
                  key={product._uid}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </>
  )
}
