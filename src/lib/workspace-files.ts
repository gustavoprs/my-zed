import type { WorkspaceFile, WorkspaceTreeItem } from "#/lib/types"

const WORKSPACE_ROUTE_PREFIX = "/my-zed"
const CONTENT_ROOT = "/content/"

const contentModules = import.meta.glob<string>("/content/**/*", {
	query: "?raw",
	import: "default",
	eager: true,
})

export const workspaceFiles = Object.entries(contentModules)
	.map(([contentPath, content]) => {
		const workspacePath = contentPath.replace(CONTENT_ROOT, "")
		const name = workspacePath.split("/").pop() ?? workspacePath
		const extension = name.includes(".") ? name.split(".").pop() : undefined

		return {
			path: `${WORKSPACE_ROUTE_PREFIX}/${workspacePath}`,
			workspacePath,
			name,
			extension: extension ?? "txt",
			content,
		}
	})
	.sort((file, nextFile) =>
		file.workspacePath.localeCompare(nextFile.workspacePath),
	)

export function getWorkspaceFileByPath(
	path: string,
): WorkspaceFile | undefined {
	return workspaceFiles.find((file) => file.path === path)
}

export function getWorkspaceFileTree(): WorkspaceTreeItem[] {
	const root: WorkspaceTreeItem = {
		path: WORKSPACE_ROUTE_PREFIX,
		children: [],
	}

	for (const file of workspaceFiles) {
		const segments = file.workspacePath.split("/")
		let currentItem = root

		for (const index of segments.keys()) {
			const isFile = index === segments.length - 1
			const path = `${WORKSPACE_ROUTE_PREFIX}/${segments.slice(0, index + 1).join("/")}`

			const existingItem = currentItem.children?.find(
				(item) => item.path === path,
			)

			if (existingItem) {
				currentItem = existingItem
				continue
			}

			const nextItem: WorkspaceTreeItem = {
				path,
				children: isFile ? undefined : [],
			}

			currentItem.children?.push(nextItem)
			currentItem = nextItem
		}
	}

	sortWorkspaceTree(root.children)

	return [root]
}

function sortWorkspaceTree(items: WorkspaceTreeItem[] | undefined) {
	if (!items) {
		return
	}

	items.sort((item, nextItem) => {
		const itemIsDirectory = Boolean(item.children)
		const nextItemIsDirectory = Boolean(nextItem.children)

		if (itemIsDirectory !== nextItemIsDirectory) {
			return itemIsDirectory ? -1 : 1
		}

		return item.path.localeCompare(nextItem.path)
	})

	for (const item of items) {
		sortWorkspaceTree(item.children)
	}
}
