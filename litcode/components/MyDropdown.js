
import { Menu } from '@headlessui/react'
import { Bars4Icon } from '@heroicons/react/24/solid'

export default function MyDropdown() {
	const items = [
		{name: "Leaderboard", disabled:false},
		{name: "Challenge", disabled:false},
		{name: "About", disabled:false},
	]
  return (
    <Menu>
      <Menu.Button className="pt-10 p-10"><Bars4Icon className="h-10 w-10 text-[#63C966]-500"/></Menu.Button>
      <Menu.Items className="absolute left text-base font-mono">
		{items.map(item=>(<><Menu.Item>
				{({ active }) => (
					<button
						className={`${active && '[#32682F]'} w-full rounded-md p-2`}
						href="/challenge">
						{item.name}
					</button>
				)}
				</Menu.Item></>
		))}
      </Menu.Items>
    </Menu>
  )
}