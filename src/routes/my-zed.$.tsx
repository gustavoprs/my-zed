import { createFileRoute } from "@tanstack/react-router"
import Editor from "#/components/my-zed/workspace/editor"
import type { ActiveFile } from "#/lib/types"

export const Route = createFileRoute("/my-zed/$")({
	component: RouteComponent,
})

function RouteComponent() {
	const { _splat } = Route.useParams()

	const splatPath = _splat?.trim()
	const path = splatPath ? `/my-zed/${splatPath}` : undefined
	const name = splatPath?.split("/").pop()
	const extension = name?.split(".").pop()

	if (!path || !name || !extension) {
		return null
	}

	const activeFile: ActiveFile = {
		path,
		name,
		extension,
	}

	return <Editor file={activeFile} />
}
