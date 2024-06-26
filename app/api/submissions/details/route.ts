import { base_url } from "@/utilities/constants"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	try {
		const queries =
			request.url.indexOf("?") !== -1
				? request.url.slice(request.url.indexOf("?") + 1)
				: ""
		const res = await fetch(`${base_url}/api/submissions/details?${queries}`, {
			method: "GET",
			headers: request.headers,
		})
		const data = await res.json()
		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.error()
	}
}
