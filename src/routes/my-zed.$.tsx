import { createFileRoute } from "@tanstack/react-router"
import Editor from "#/components/my-zed/workspace/editor"
import { getWorkspaceFileByPath } from "#/lib/workspace-files"

export const Route = createFileRoute("/my-zed/$")({
	component: RouteComponent,
})

function RouteComponent() {
	const { _splat } = Route.useParams()

	const splatPath = _splat?.trim()
	const path = splatPath ? `/my-zed/${splatPath}` : undefined

	if (!path) {
		return null
	}

	const activeFile = getWorkspaceFileByPath(path)
	if (!activeFile) {
		return null
	}

	return <Editor file={activeFile} />
}
