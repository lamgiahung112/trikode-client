"use client"
import registerUser from "@/actions/auth/register"
import InputField from "@/components/auth/input-field"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import SubmitButton from "@/components/auth/submit-button"
import { useAuthentication } from "@/contexts/authentication-context"
import { useEffect } from "react"

function MainForm() {
	const router = useRouter()
	const { isUserLoaded } = useAuthentication()

	async function onSubmit(data: FormData) {
		try {
			await registerUser(data)
			toast.success("Successfully registered!")
			router.push("/auth/sign-in")
		} catch (error) {
			toast.error((error as Error).message ?? "")
		}
	}

	useEffect(() => {
		if (isUserLoaded) {
			router.push("/challenges")
		}
	}, [isUserLoaded])

	return (
		<form className="flex flex-col w-full gap-y-6" action={onSubmit}>
			<InputField placeholder="Your nickname" name="nickname" />
			<InputField placeholder="Your email" name="email" isEmail />
			<InputField placeholder="Your name" name="name" />
			<InputField placeholder="Your password" name="password" isPassword />
			<InputField placeholder="A short description about yourself" name="excerpt" />
			<SubmitButton title="Register" pendingTitle="Submitting..." />
		</form>
	)
}

export default MainForm
