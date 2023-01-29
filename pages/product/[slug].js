import styles from '../../styles/product.module.scss'
import db from "../../utils/db";
import Product from "../../models/Product";
import Category from "../../models/Category";
import SubCategory from "../../models/SubCategory";
// import User from "../../models/User";
import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function product({product}) {
    console.log(product)
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header />
      <div className={styles.product}>
        <div className={styles.product__container}>
          <div className={styles.path}>
            Home / {product.category.name}
            {product.subCategories.map((sub) => (
              <span>/{sub.name}</span>
            ))}
          </div>
          <div className={styles.product__main}>
           
          </div>
         
          {/*
          <ProductsSwiper products={related} />
          */}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export async function getServerSideProps(context) {
    const { query } = context;
    const slug = query.slug; //get slug from url
    const style = query.style; //get style from url
    const size = query.size || 0; //get size from url
    db.connectDb();

    //------------
    let product = await Product.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "subCategories", model: SubCategory })
    // .populate({ path: "reviews.reviewBy", model: User })
    .lean();
    let subProduct = product.subProducts[style];
    let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });

    console.log(subProduct)

    let newProduct = {
        ...product,
        style,
        images: subProduct.images,
        sizes: subProduct.sizes,
        discount: subProduct.discount,
        sku: subProduct.sku,
        colors: product.subProducts.map((p) => {
          return p.color;
        }),
        priceRange: subProduct.discount
          ? `From ${(prices[0] - prices[0] / subProduct.discount).toFixed(2)} to ${(
              prices[prices.length - 1] -
              prices[prices.length - 1] / subProduct.discount
            ).toFixed(2)}$`
          : `From ${prices[0]} to ${prices[prices.length - 1]}$`,
        price:
          subProduct.discount > 0
            ? (
                subProduct.sizes[size].price -
                subProduct.sizes[size].price / subProduct.discount
              ).toFixed(2)
            : subProduct.sizes[size].price,
        priceBefore: subProduct.sizes[size].price,
        quantity: subProduct.sizes[size].qty,
        
      };

     console.log("New Product",newProduct)
    //------------
    db.disconnectDb();
    return {
        props: {
            product: JSON.parse(JSON.stringify(newProduct)),
        },
    };
  }
