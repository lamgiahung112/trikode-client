import Image from "next/image"
import MainForm from "./main-form"
import Link from "next/link"

function SignInForm() {
	return (
		<div className="flex flex-col justify-between items-center px-8 py-4 bg-neutral-200 rounded-md h-full w-full text-black">
			<div className="flex flex-col items-center">
				<Image src="/leetcode_black.svg" alt="logo" height={80} width={80} />
				<div className="font-bold text-lg">TRIKODE</div>
			</div>
			<div className="flex flex-col flex-[1] justify-evenly w-full">
				<MainForm />
				<div className="flex justify-between w-full">
					<Link href="/auth/forgot-password" className="text-[#546E7A]">
						Forgot password
					</Link>
					<Link href="/auth/register" className="text-[#546E7A]">
						Sign up
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SignInForm
