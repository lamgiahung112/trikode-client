"use client"
import registerUser from "@/actions/auth/register"
import InputField from "@/components/auth/input-field"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import SubmitButton from "@/components/auth/submit-button"

function MainForm() {
	const router = useRouter()

	async function onSubmit(data: FormData) {
		registerUser(data)
			.then(() => {
				toast.success("Successfully registered!")
				router.push("/auth/sign-in")
			})
			.catch((err) => toast.error(err.message))
	}

	return (
		<form className="flex flex-col w-full gap-y-6" action={onSubmit}>
			<InputField placeholder="Your nickname" name="nickname" />
			<InputField placeholder="Your password" name="password" isPassword />
			<SubmitButton title="Sign In" pendingTitle="Signing you in..." />
		</form>
	)
}

export default MainForm
