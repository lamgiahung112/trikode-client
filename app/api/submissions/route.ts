import { base_url } from "@/utilities/constants"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	try {
		const queries =
			request.url.indexOf("?") !== -1
				? request.url.slice(request.url.indexOf("?") + 1)
				: ""
		const res = await fetch(`${base_url}/api/submissions?${queries}`, {
			method: "GET",
			headers: request.headers,
		})
		const challenges = await res.json()
		return NextResponse.json(challenges)
	} catch (error) {
		return NextResponse.error()
	}
}
