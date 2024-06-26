import Image from "next/image"
import MainForm from "./main-form"
import Link from "next/link"

function RegisterForm() {
	return (
		<div className="flex flex-col justify-between items-center px-8 py-4 bg-neutral-200 rounded-md h-full w-full text-black">
			<div className="flex flex-col items-center">
				<Image src="/leetcode_black.svg" alt="logo" height={80} width={80} />
				<div className="font-bold text-lg">TRIKODE</div>
			</div>
			<MainForm />
			<div className="flex flex-col">
				<div className="text-neutral-600">
					Already have an account?{" "}
					<Link className="text-[#546E7A]" href="/auth/sign-in">
						Sign In
					</Link>
				</div>
			</div>
		</div>
	)
}

export default RegisterForm
