import Link from "next/link"
import Image from "next/image"
import { menu_data } from "./data/content"

export default function Menu() {
	return (
		<div className="w-full py-8 px-8 flex flex-center justify-around items-center ">
			<div className="flex flex-center justify-center items-center">
				<div className="w-16 h-16 rounded-full overflow-hidden">
					<Image src="/ze.jpg" alt="Profile" width={64} height={64} />
				</div>
				<div className="ml-4">
					<div className="text-2xl font-bold">Pedro Mota</div>
					<div className="text-sm">
						Software Engineer
					</div>
				</div>
			</div>
				<ul className="flex">
					{menu_data.map((item, index) => (
						<li className="flex px-4 py-2" key={index}>
							<Link href={item.link}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
		</div>
	)
}