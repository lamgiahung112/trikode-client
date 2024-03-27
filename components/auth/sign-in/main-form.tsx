"use client"
import registerUser from "@/actions/auth/register"
import InputField from "@/components/auth/input-field"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import SubmitButton from "@/components/auth/submit-button"
import signInUser from "@/actions/auth/sign-in"
import { useAuthentication } from "@/contexts/authentication-context"

function MainForm() {
	const router = useRouter()
	const { loadUserFromCredentials } = useAuthentication()

	async function onSubmit(data: FormData) {
		try {
			const token = await signInUser(data)

			toast.success("Successfully signed in!")
			loadUserFromCredentials(token)
			router.push("/challenges")
		} catch (error) {
			toast.error((error as Error).message ?? "")
		}
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
