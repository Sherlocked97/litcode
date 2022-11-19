import { Tab } from "@headlessui/react"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Table42 from "../components/Table42"

export default function leaderboard() {
	return (
		<Layout pageTitle="42rank">
			<Header />
			<Table42 />
		</Layout>
	)
}