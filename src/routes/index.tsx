import { createFileRoute } from "@tanstack/react-router"
import AppFrame from "#/components/layout/app-frame"
import MyZed from "#/components/my-zed"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
	return (
		<AppFrame>
			<MyZed />
		</AppFrame>
	)
}
