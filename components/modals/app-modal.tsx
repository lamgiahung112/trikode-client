"use client"

import { useStore } from "@/utilities/store"
import modalStore from "@/utilities/stores/modal-store"

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
			<div className="m-auto w-[50%] h-[80%] bg-neutral-600 z-20 transform transition-all duration-500 ease-in-out">
				hey you
			</div>
		</div>
	)
}

export default AppModal
