import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Main from '../components/home/main'
import Footer from '../components/footer'
import axios from 'axios'
import { useSession, signIn, signOut } from "next-auth/react"
import FlashDeals from '../components/home/flashDeals'
import Category from '../components/home/category'
import ProductCard from '../components/ProductCard'
import { gamingSwiper, women_accessories, women_dresses, women_shoes, women_swiper,homeImprovSwiper } from '../data/home'
import { useMediaQuery } from "react-responsive";
import ProductsSwiper from '../components/productsSwiper'
import db from "../utils/db";
import Product from "../models/Product"

const inter = Inter({ subsets: ['latin'] })

export default function Home({country, products}) {
	console.log("Products", products);
	const { data: session } = useSession()
	console.log(session);
	const isMedium = useMediaQuery({ query: "(max-width:850px)" });
	const isMobile = useMediaQuery({ query: "(max-width:550px)" });
	return (
		<>
			<Header country={country}/>
				<div className={styles.home}>
					<div className={styles.container}>
						<Main></Main>
						<FlashDeals></FlashDeals>
						<div className={styles.home__category}>
							<Category
							header="Dresses"
							products={women_dresses}
							background="#5a31f4"
							/>
							{!isMedium && (
							<Category
								header="Shoes"
								products={women_shoes}
								background="#3c811f"
							/>
							)}
							{isMobile && (
							<Category
								header="Shoes"
								products={women_shoes}
								background="#3c811f"
							/>
							)}
							<Category
							header="Accessories"
							products={women_accessories}
							background="#000"
							/>
						</div>
						<ProductsSwiper products={women_swiper} header="Women Swiper"></ProductsSwiper>
						<ProductsSwiper products={gamingSwiper} header="For Gamers"></ProductsSwiper>
						<ProductsSwiper products={homeImprovSwiper} header="House Improvements"></ProductsSwiper>

						<div className={styles.products}>
							{
								products.map((product)=>(
									<ProductCard product={product} key={product._id}></ProductCard>
								))
							}
						</div>
					</div>
				</div>
			<Footer country={country}/>
		</>
	)
}

export async function getServerSideProps() {
	db.connectDb();

	let products = await Product.find().sort({createAt:-1}).lean();
	console.log(products);
	
  	// let data = await axios
    // .get("https://api.ipregistry.co/?key=qkthx9jvql9h2gyc")
    // .then((res) => {
    // 	return res.data.location.country;
    // })
    // .catch((err) => {
    //   	console.log(err);
    // });
	// console.log(data);

	

	return{
		props:{
			products:JSON.parse(JSON.stringify(products)) ,
			// country: { name: data.name, flag: data.flag.emojitwo },
			country: { name: "Indonesia", flag: "./images/indonesia.png",},
		}
	}
}
