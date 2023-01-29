import styles from "./styles.module.scss";
import { Rating } from '@mui/material';


export default function Infos({ product, setActiveImg }) {
  return (
    <div className={styles.infos}>
         <div className={styles.infos__container}>
            <h1 className={styles.infos__name}>{product.name}</h1>
            <h2 className={styles.infos__sku}>{product.sku}</h2>
            <div className={styles.infos__rating}>
                <Rating
                    name="half-rating-read"
                    defaultValue={product.rating}
                    precision={0.5}
                    readOnly
                />
                ({product.numReviews}
                {product.numReviews == 1 ? " review" : " reviews"})

                <h2 >{product.rating}</h2>
            </div>
            <div className={styles.infos__price}>
                {product.priceRange?(
                    <h2>{product.priceRange}</h2>):(
                        <h2>{product.price}</h2>
                )}
                {/* {product.discount > 0 ? (
                <h3>
                    <span>{product.priceBefore}</span>
                    <span>(-{product.discount}%)</span>
                <h3/>
                ):(
                    ""
                )} */}
                {product.discount > 0 ? (
                <h3>
                <span>{product.priceBefore}$</span>
                <span>(-{product.discount}%)</span>
                </h3>
            ) : (
                ""
            )}
            </div>
         </div>
    </div>
  )
}
