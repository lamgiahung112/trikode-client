import { FunctionComponent, MutableRefObject } from "react"

interface InputFieldProps {
	placeholder: string
	name: string
	isPassword?: boolean
	isEmail?: boolean
}

const InputField: FunctionComponent<InputFieldProps> = (props: InputFieldProps) => {
	return (
		<div className="w-full">
			<input
				placeholder={props.placeholder}
				name={props.name}
				required
				className="w-full h-10 outline-none px-2 rounded-sm border border-neutral-400 focus:border-neutral-800"
				type={props.isPassword ? "password" : props.isEmail ? "email" : "text"}
			/>
		</div>
	)
}

export default InputField
