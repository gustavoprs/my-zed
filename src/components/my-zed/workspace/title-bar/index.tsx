import {
	ChevronDownIcon,
	ComputerIcon,
	GitBranchIcon,
	MenuIcon,
	SplitIcon,
} from "lucide-react"
import { Button } from "#/components/ui/button"

export default function TitleBar() {
	return (
		<div className="flex justify-between items-center flex-1 h-full">
			<div className="flex gap-0.5 pl-1.5">
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<MenuIcon />
				</Button>
				<Button variant={"ghost"} className={"gap-2 px-1 h-6"} disabled>
					<div className="relative">
						<ComputerIcon />
						<span className="absolute -bottom-px -right-px border-2 rounded-full size-2.5 border-mz-canvas-default bg-success"></span>
					</div>
					Ubuntu
				</Button>
				<Button variant={"ghost"} className={"px-1 h-6"} disabled>
					my-zed
				</Button>
				<div className="flex items-center gap-px">
					<Button
						variant={"ghost"}
						className={
							"gap-1.5 px-1 h-6 text-mz-text-muted hover:text-mz-text-muted"
						}
						disabled
					>
						<SplitIcon className="rotate-90 size-3" />
						main
					</Button>
					<span className="text-sm text-mz-text-muted/25">/</span>
					<Button
						variant={"ghost"}
						className={
							"gap-1.5 px-1 h-6 text-mz-text-muted hover:text-mz-text-muted"
						}
						disabled
					>
						<GitBranchIcon className="size-3" />
						main
					</Button>
				</div>
			</div>
			<div className="flex items-center gap-0.5 h-full">
				<Button variant={"ghost"} className={"px-1 h-6"} disabled>
					Sign In
				</Button>
				<Button size={"icon"} variant={"ghost"} className={"size-6"} disabled>
					<ChevronDownIcon />
				</Button>
			</div>
		</div>
	)
}
