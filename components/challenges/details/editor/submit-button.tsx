import { useFormStatus } from "react-dom"

function SubmitButton() {
	const { pending } = useFormStatus()
	return (
		<div className="flex justify-end py-1 px-1">
			<button
				disabled={pending}
				type="submit"
				className="px-4 py-2 bg-green-600 rounded-xl cursor-pointer hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-green-800"
			>
				Submit
			</button>
		</div>
	)
}

export default SubmitButton
