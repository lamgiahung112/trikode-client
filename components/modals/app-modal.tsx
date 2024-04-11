"use client"

import { useStore } from "@/utilities/store"
import modalStore from "@/utilities/stores/modal-store"
import Image from "next/image"

function AppModal() {
	const { close, component, isOpen, title } = useStore(modalStore)

	if (!isOpen) {
		return <></>
	}

	return (
		<div
			className="fixed flex items-center top-0 left-0 h-screen w-screen bg-opacity-25 bg-black z-10"
			onClick={close}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="flex flex-col m-auto w-[50%] max-h-[80%] break-words bg-neutral-600 z-20 transform transition-all duration-500 ease-in-out rounded-3xl p-[24px]"
			>
				<div className="flex justify-between">
					<div className="text-4xl text-neutral-300">{title}</div>
					<div className="cursor-pointer" onClick={close}>
						<Image alt="" src="/cancel.svg" width={24} height={24} />
					</div>
				</div>
				<div className="overflow-x-auto">{component}</div>
			</div>
		</div>
	)
}

export default AppModal
