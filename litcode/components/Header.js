
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
				<a className="pr-20 href=https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-0cbc549c7a6a027ecae10d83f05c00faff575b7f725921ea8d7978aca6b4be32&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fcallback&response_type=code">
					<BluePill />
				</a>
			</div>
		</header>
	</div>
	)
}
