import { FunctionComponent } from "react"
import { useFormStatus } from "react-dom"

interface SubmitButtonProps {
	pendingTitle: string
	title: string
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = (props: SubmitButtonProps) => {
	const status = useFormStatus()

	return (
		<button
			type="submit"
			disabled={status.pending}
			className="bg-blue-500 text-white py-2 rounded-sm cursor-pointer hover:bg-blue-400 disabled:bg-neutral-700 disabled:cursor-none"
		>
			{status.pending ? props.pendingTitle : props.title}
		</button>
	)
}

export default SubmitButton
