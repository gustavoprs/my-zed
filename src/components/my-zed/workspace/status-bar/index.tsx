import {
	BugIcon,
	CheckIcon,
	FolderTreeIcon,
	GitBranchIcon,
	ListTreeIcon,
	SearchIcon,
	TerminalSquareIcon,
	UsersRoundIcon,
	ZapIcon,
} from "lucide-react"
import { Button } from "#/components/ui/button"

export default function StatusBar() {
	return (
		<div className="flex justify-between items-center px-1.5 max-h-7 min-h-8 w-full">
			<div className="flex gap-0.5">
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<GitBranchIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<UsersRoundIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<ListTreeIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<SearchIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<ZapIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<CheckIcon />
				</Button>
			</div>
			<div className="flex gap-0.5">
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<TerminalSquareIcon />
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<BugIcon />
				</Button>
				<Button
					size={"icon"}
					variant={"ghost"}
					className={"size-6 text-mz-accent"}
					disabled
				>
					<FolderTreeIcon />
				</Button>
			</div>
		</div>
	)
}
