import { SVGSkeleton, Skeleton } from "../skeleton"

function AuthFormSkeleton() {
	return (
		<div className="h-[calc(100vh-62px)] px-[10%] lg:px-[30%] py-[5%] flex justify-center items-center">
			<div className="flex flex-col justify-between items-center px-8 py-4 bg-neutral-200 rounded-md h-full w-full text-black">
				<div className="flex flex-col justify-between items-center px-8 py-4 h-full w-full">
					<div className="flex flex-col items-center">
						<SVGSkeleton className="w-[80px] h-[80px]" />
						<div>
							<Skeleton className="w-[56px] max-w-full" />
						</div>
					</div>
					<form className="flex flex-col w-full gap-y-6">
						<div className="w-full">
							<div className="w-full h-10 px-2 border border-neutral-400 focus:border-neutral-800">
								<Skeleton className="w-[104px] max-w-full" />
							</div>
						</div>
						<div className="w-full">
							<div className="w-full h-10 px-2 border border-neutral-400 focus:border-neutral-800">
								<Skeleton className="w-[80px] max-w-full" />
							</div>
						</div>
						<div className="w-full">
							<div className="w-full h-10 px-2 border border-neutral-400 focus:border-neutral-800">
								<Skeleton className="w-[72px] max-w-full" />
							</div>
						</div>
						<div className="w-full">
							<div className="w-full h-10 px-2 border border-neutral-400 focus:border-neutral-800">
								<Skeleton className="w-[104px] max-w-full" />
							</div>
						</div>
						<div className="w-full">
							<div className="w-full h-10 px-2 border border-neutral-400 focus:border-neutral-800">
								<Skeleton className="w-[272px] max-w-full" />
							</div>
						</div>
						<div className="py-2">
							<Skeleton className="w-[64px] max-w-full" />
						</div>
					</form>
					<div className="flex flex-col">
						<div>
							<Skeleton className="w-[256px] max-w-full" />
							<a>
								<Skeleton className="w-[56px] max-w-full" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthFormSkeleton
