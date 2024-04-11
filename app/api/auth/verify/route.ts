import { base_url } from "@/utilities/constants"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
	const token = request.headers.get("authorization")!

	try {
		const res = await fetch(`${base_url}/api/auth/verify`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
				authorization: token,
			},
		})
		const resBody = await res.json()
		return NextResponse.json(resBody)
	} catch (error) {
		return NextResponse.error()
	}
}
