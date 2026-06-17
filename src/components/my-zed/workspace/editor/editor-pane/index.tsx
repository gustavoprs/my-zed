import type { WorkspaceFile } from "#/lib/types"

interface EditorPaneProps {
	file: WorkspaceFile
}

export default function EditorPane({ file }: EditorPaneProps) {
	return (
		<div className="w-full flex-1 overflow-auto bg-mz-editor-background">
			<pre className="m-0 min-w-max px-4 py-1.5 font-mono leading-6 text-mz-editor-foreground">
				<code>{file.content}</code>
			</pre>
		</div>
	)
}
