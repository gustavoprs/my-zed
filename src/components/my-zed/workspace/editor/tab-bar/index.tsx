import {
	ArrowLeftIcon,
	ArrowRightIcon,
	Columns2Icon,
	Maximize2Icon,
	PlusIcon,
} from "lucide-react"
import FileTab from "#/components/my-zed/workspace/editor/tab-bar/file-tab"
import { Button } from "#/components/ui/button"
import type { ActiveFile } from "#/lib/types"

interface TabBarProps {
	activeFile: ActiveFile
}

export default function TabBar({ activeFile }: TabBarProps) {
	return (
		<div className="flex justify-between items-center px-1.5 w-full max-h-9 min-h-9">
			<div className="flex gap-2">
				<div className="flex gap-0.5">
					<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
						<ArrowLeftIcon />
					</Button>
					<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
						<ArrowRightIcon />
					</Button>
				</div>
				<div className="flex">
					<FileTab file={activeFile} />
				</div>
			</div>
			<div className="flex items-center gap-0.5">
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<PlusIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<Columns2Icon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<Maximize2Icon className="size-3" />
				</Button>
			</div>
		</div>
	)
}
