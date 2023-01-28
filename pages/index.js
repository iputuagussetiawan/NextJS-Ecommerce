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

const inter = Inter({ subsets: ['latin'] })

export default function Home({country}) {
	const { data: session } = useSession()
	console.log(session);
	return (
		<>
			<Header country={country}/>
				<div className={styles.home}>
					<div className={styles.container}>
						<Main></Main>
						<FlashDeals></FlashDeals>
					</div>
				</div>
			<Footer country={country}/>
		</>
	)
}

export async function getServerSideProps() {
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
			// country: { name: data.name, flag: data.flag.emojitwo },
			country: { name: "Indonesia", flag: "./images/indonesia.png",},
		}
	}
}
