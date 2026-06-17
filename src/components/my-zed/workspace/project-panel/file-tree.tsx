import FileTreeItem from "#/components/my-zed/workspace/project-panel/file-tree-item"
import { getWorkspaceFileTree } from "#/lib/workspace-files"

export default function FileTree() {
	return getWorkspaceFileTree().map((item) => (
		<FileTreeItem key={item.path} item={item} defaultOpen />
	))
}
