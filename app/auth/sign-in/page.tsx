import AuthFormSkeleton from "@/components/auth/auth-form-skeleton"
import SignInForm from "@/components/auth/sign-in/sign-in-form"
import { Suspense } from "react"

function SignInPage() {
	return (
		<Suspense fallback={<AuthFormSkeleton />}>
			<div className="h-[calc(100vh-62px)] px-[10%] lg:px-[30%] py-[5%] flex justify-center items-center">
				<SignInForm />
			</div>
		</Suspense>
	)
}

export default SignInPage
