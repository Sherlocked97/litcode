import Link from "next/link"
import BluePill from "../components/bluePill"
import Pic42 from "../components/Pic42"
import MyDropdown from "../components/MyDropdown"
import { LockClosedIcon } from '@heroicons/react/24/solid'

export default function Header() {
	return (
	<div>
		<header className="bg-black p-1.5">
			<div className="flex justify-between items-center">
			<div>
				<MyDropdown />
			</div>
			<div class="flex justify-center items-center">
				<Pic42 />
			</div>
					<a className="pr-20">
						<BluePill />
						{/* <LockClosedIcon className="h-10 w-10 text-[@63C966]-500"/> */}
					</a>
			</div>
		</header>
	</div>
	)
}
