import Header from "../components/Header"
import Layout from "../components/Layout"
import RanksPicThick from "../components/asciiCode"

function Index() {
	return (
		<Layout pageTitle="Welcome to 42rank">
			<Header />
			<div class="pt-10 flex justify-center items-center">
				<RanksPicThick />
			</div>
			<div class ="flex justify-center pt-20">
				<button class="bg-[#63C966] hover:bg-[#89DC8C] text-white font-mono py-4 px-20 border-[#89DC8C]-4 border-[#63C966]-700 hover:border-[#63C966]-500 rounded">
 					Join!
				</button>
			</div>
		</Layout>
	)
}
export default Index