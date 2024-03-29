"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import * as jose from "jose"
import verifyUser from "@/actions/auth/verify"
import { toast } from "react-toastify"

interface UserProps {
	id?: string
	name?: string
	email?: string
	nickname?: string
	role?: "USER" | "ADMIN"
}

interface AuthenticationContextProps {
	user?: UserProps | null
	isUserLoaded: boolean
	logout: () => void
	loadUserFromCredentials: (creds: string) => void
}

const AuthenticationContext = createContext<AuthenticationContextProps>({
	user: null,
	isUserLoaded: false,
	logout() {},
	loadUserFromCredentials(creds) {},
})

const useAuthentication = () => {
	return useContext(AuthenticationContext)
}

const AuthenticationContextProvider = (props: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserProps | null>(null)
	const [isUserLoaded, setIsUserLoaded] = useState(false)

	function logout() {
		localStorage.removeItem("__auth__")
		setUser(null)
		setIsUserLoaded(true)
	}

	function loadUserFromCredentials(creds: string) {
		const decryptedData = jose.decodeJwt(creds) as jose.JWTPayload & UserProps

		if (decryptedData.exp && decryptedData.exp < new Date().getTime() / 1000) {
			return
		}

		setIsUserLoaded(true)
		setUser(decryptedData)
		localStorage.setItem("__auth__", creds)
	}

	useEffect(() => {
		const localToken = localStorage.getItem("__auth__")
		if (!isUserLoaded && localToken) {
			verifyUser()
				.then(() => {
					loadUserFromCredentials(localToken)
				})
				.catch((e) => {
					console.log("Invalid credentials or not logged in")
				})
		}
	}, [])

	return (
		<AuthenticationContext.Provider
			value={{ user, isUserLoaded, logout, loadUserFromCredentials }}
		>
			{props.children}
		</AuthenticationContext.Provider>
	)
}

export { AuthenticationContextProvider, useAuthentication }
