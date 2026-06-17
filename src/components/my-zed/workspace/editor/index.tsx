import TabBar from "#/components/my-zed/workspace/tab-bar"
import type { ActiveFile } from "#/lib/types"

interface EditorProps {
	file: ActiveFile
}

export default function Editor({ file }: EditorProps) {
	return <TabBar activeFile={file} />
}
