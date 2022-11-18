import Header from "../components/Header"
import Layout from "../components/Layout"
import IDE from "../components/IDE"
import Nav from "../components/NavBar"
import MyDropdown from "../components/MyDropdown"

function Index() {
	return (
		<Layout pageTitle="Welcome to 42rank">
			<MyDropdown />
		</Layout>
	)
}
export default Index