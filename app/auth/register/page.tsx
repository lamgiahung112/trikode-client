import AuthFormSkeleton from "@/components/auth/auth-form-skeleton"
import RegisterForm from "@/components/auth/register/register-form"
import { Suspense } from "react"

function RegisterPage() {
	return (
		<Suspense fallback={<AuthFormSkeleton />}>
			<div className="h-[calc(100vh-62px)] px-[10%] lg:px-[30%] py-[5%] flex justify-center items-center">
				<RegisterForm />
			</div>
		</Suspense>
	)
}

export default RegisterPage
