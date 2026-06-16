import { createFileRoute } from "@tanstack/react-router"
import AppFrame from "#/components/layout/app-frame"
import EditorShell from "#/components/layout/editor-shell"
import EditorWindow from "#/components/layout/editor-window"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
	return (
		<AppFrame>
			<EditorWindow>
				<EditorShell />
			</EditorWindow>
		</AppFrame>
	)
}
