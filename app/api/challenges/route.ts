import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	try {
		const queries =
			request.url.indexOf("?") !== -1
				? request.url.slice(request.url.indexOf("?") + 1)
				: ""
		const res = await fetch(`http://localhost:3001/api/challenge?${queries}`, {
			method: "GET",
			headers: request.headers,
		})
		const challenges = await res.json()
		return NextResponse.json(challenges)
	} catch (error) {
		return NextResponse.error()
	}
}
