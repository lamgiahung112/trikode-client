import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	try {
		const queries =
			request.url.indexOf("?") !== -1
				? request.url.slice(request.url.indexOf("?") + 1)
				: ""
		const res = await fetch(
			`http://localhost:3001/api/challenge/details?${queries}`,
			{
				method: "GET",
				headers: request.headers,
			}
		)
		const hydratedChallenge = await res.json()
		return NextResponse.json(hydratedChallenge)
	} catch (error) {
		return NextResponse.error()
	}
}
