import Header from "../components/Header"
import Layout from "../components/Layout"
import IDE from "../components/IDE"
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Index = () => {
	return (
		<Layout pageTitle="Welcome to Lenspad">
			<Header />
			<IDE/>
		</Layout>
	)
}
export default Index