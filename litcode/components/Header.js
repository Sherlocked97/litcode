
import Link from "next/link"
import { useRouter } from "next/router"
import BluePill from "./BluePill"
import Pic42 from "../components/Pic42"
import MyDropdown from "../components/MyDropdown"
import { LockClosedIcon } from '@heroicons/react/24/solid'

export default function Header() {
	const router = useRouter()

	return (
	<div>
		<header className="bg-black p-1.5">
			<div className="flex justify-between items-center">
			<div>
				<MyDropdown />
			</div>
			<div class="flex justify-center items-center">
				<button onClick={() => router.push("/")}>
					<Pic42 />
				</button>
			</div>
				<a className="pr-20">
					<BluePill />
				</a>
			</div>
		</header>
	</div>
	)
}
