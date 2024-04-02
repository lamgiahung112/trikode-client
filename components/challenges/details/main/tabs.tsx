"use client"
import Image from "next/image"
import { notFound, usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { twMerge } from "tailwind-merge"

function MainContentTabs() {
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		if (!pathname.includes("/description") && !pathname.includes("/submissions")) {
			notFound()
		}
	}, [pathname])

	return (
		<div className="flex p-1 gap-x-2 bg-neutral-700 rounded-md rounded-b-none">
			<div
				onClick={() => {
					router.push(
						`${pathname.substring(0, pathname.lastIndexOf("/"))}/description`
					)
				}}
				className={twMerge(
					"flex px-2 py-1 gap-x-2 hover:bg-neutral-500 cursor-pointer rounded-md",
					!pathname.includes("/description") && "text-neutral-400"
				)}
			>
				<Image alt="" src="/description.svg" height={12} width={12} />
				Description
			</div>
			<div className="flex items-center text-neutral-500">|</div>
			<div
				onClick={() => {
					router.push(
						`${pathname.substring(0, pathname.lastIndexOf("/"))}/submissions`
					)
				}}
				className={twMerge(
					"flex px-2 py-1 gap-x-2 hover:bg-neutral-500 cursor-pointer rounded-md",
					!pathname.includes("/submissions") && "text-neutral-400"
				)}
			>
				<Image alt="" src="/submission.svg" height={12} width={12} />
				Submission
			</div>
		</div>
	)
}

export default MainContentTabs
