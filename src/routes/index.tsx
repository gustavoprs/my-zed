import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
	beforeLoad: () => {
		throw redirect({
			to: "/my-zed",
			statusCode: 301,
		})
	},
})
