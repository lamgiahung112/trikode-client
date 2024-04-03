import Image from "next/image"

function Title() {
	return (
		<div className="flex p-1 gap-x-2 bg-neutral-700 rounded-md rounded-b-none">
			<div className="flex px-2 py-1 gap-x-2 hover:bg-neutral-500 cursor-pointer rounded-md">
				<Image alt="" src="/code.svg" height={20} width={20} />
				Code
			</div>
		</div>
	)
}

export default Title
