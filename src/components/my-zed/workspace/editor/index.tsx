import EditorPane from "#/components/my-zed/workspace/editor/editor-pane"
import EditorToolbar from "#/components/my-zed/workspace/editor/editor-toolbar"
import TabBar from "#/components/my-zed/workspace/editor/tab-bar"
import type { WorkspaceFile } from "#/lib/types"

interface EditorProps {
	file: WorkspaceFile
}

export default function Editor({ file }: EditorProps) {
	return (
		<div className="flex flex-col h-full overflow-hidden">
			<TabBar activeFile={file} />
			<EditorToolbar file={file} />
			<EditorPane file={file} />
		</div>
	)
}
