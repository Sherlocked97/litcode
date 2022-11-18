import { Menu } from '@headlessui/react'

export default function MyDropdown() {
	const items = [
		{name: "Leaderboard", disabled:false},
		{name: "What is this about?", disabled:false}]
  return (
    <Menu>
      <Menu.Button className="pt-10 p-10">More</Menu.Button>   {/* Here Name and padding of dropdown */}
      <Menu.Items className="w-20 p-10">
		{items.map(item=>(
        <><Menu.Item>
				{({ active }) => (
					<button
						className={`${active && '[#32682F]'} w-full rounded-md p-2`}
						href="/account-settings"
					>
						{item.name}
					</button>
				)}
			</Menu.Item><Menu.Item>
					{({ active }) => (
						<button
							className={`${active && '[#32682F]'} w-full rounded-md p-2`}
							href="/account-settings"
						>
							{/* {item.name} */}
						</button>
					)}
				</Menu.Item></>
		))}
      </Menu.Items>
    </Menu>
  )
}