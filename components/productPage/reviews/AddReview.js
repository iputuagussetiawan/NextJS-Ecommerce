
import { useState } from "react";
import Select from "./Select";
import styles from "./styles.module.scss";

export default function AddReview({ product, setReviews }) {
    const [size, setSize] = useState("");
  return (
    <div className={styles.reviews__add}>
        <div className={styles.reviews__add_wrap}>
            <div className={styles.flex} style={{ gap: "10px" }}>
            <Select
                property={size}
                text="Size"
                data={product.allSizes.filter((x) => x.size !== size)}
                handleChange={setSize}
            />
            </div>
        </div>
    </div>
  );
}

