export type WorkspaceFile = {
	path: string
	workspacePath: string
	name: string
	extension: string
	content: string
}

export type WorkspaceTreeItem = {
	path: string
	children?: WorkspaceTreeItem[]
}
