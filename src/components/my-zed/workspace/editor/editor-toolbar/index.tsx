import { SearchIcon, Settings2Icon, TextCursorIcon } from "lucide-react"
import { Button } from "#/components/ui/button"
import type { WorkspaceFile } from "#/lib/types"

interface EditorToolbarProps {
	file: WorkspaceFile
}

export default function EditorToolbar({ file }: EditorToolbarProps) {
	return (
		<div className="flex justify-between items-center px-1.5 w-full max-h-10 min-h-10">
			<Button
				variant={"ghost"}
				className={
					"px-1 h-6 text-base font-light font-mono text-mz-text-muted hover:text-mz-text-muted"
				}
				disabled
			>
				{file.path.replace("/my-zed/", "")}
			</Button>
			<div className="flex gap-0.5">
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<SearchIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<TextCursorIcon className="size-3" />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<Settings2Icon />
				</Button>
			</div>
		</div>
	)
}
