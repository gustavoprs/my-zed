import { createFileRoute } from "@tanstack/react-router"
import AppFrame from "#/components/layout/app-frame"
import Window from "#/components/layout/window"
import Zed from "#/components/zed"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
	return (
		<AppFrame>
			<Window>
				<Zed />
			</Window>
		</AppFrame>
	)
}
