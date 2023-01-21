import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import axios from 'axios'

import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home({country}) {
	const { data: session } = useSession()
	console.log(session);
	return (
		<div>
			<Header country={country}/>
			{
				session? "you are login" : "You are not login"}
			<Footer country={country}/>
		</div>
	)
}

export async function getServerSideProps() {
  	let data = await axios
    .get("https://api.ipregistry.co/?key=qkthx9jvql9h2gyc")
    .then((res) => {
    	return res.data.location.country;
    })
    .catch((err) => {
      	console.log(err);
    });
	console.log(data);

	return{
		props:{
			// country: { name: data.name, flag: data.flag.emojitwo },
			country: { name: "Indonesia", flag: "./images/indonesia.png",},
		}
	}
}
