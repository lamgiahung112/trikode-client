import AuthFormSkeleton from "@/components/auth/auth-form-skeleton"
import RegisterForm from "@/components/auth/register/register-form"
import { Suspense } from "react"

function RegisterPage() {
	return (
		<div className="h-[calc(100vh-62px)] px-[10%] lg:px-[30%] py-[5%] flex justify-center items-center">
			<Suspense fallback={<AuthFormSkeleton />}>
				<RegisterForm />
			</Suspense>
		</div>
	)
}

export default RegisterPage
