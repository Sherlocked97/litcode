import Link from "next/link"
import Nav from "./NavBar"

export default function Header() {
	return (
	<div>
		<header className="bg-black p-1.5">
			<div className="flex justify-between items-center">
					<a className="font-sans font-bold text-xl" href="/">
						<span role="img" aria-label="Books">💻</span>
							42rank
					</a>
			</div>
			<div>
				<Nav/>
			</div>
		</header>
	</div>
	)
}
