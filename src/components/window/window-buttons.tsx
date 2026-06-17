import { CopyIcon, MinusIcon, SquareIcon, XIcon } from "lucide-react"
import { Button } from "#/components/ui/button"

export interface WindowButtonsProps {
	isFullscreen?: boolean
	onMinimize?: () => void | Promise<void>
	onMaximize?: () => void | Promise<void>
	onRestore?: () => void | Promise<void>
	onClose?: () => void | Promise<void>
}

export default function WindowButtons({
	isFullscreen = false,
	onMinimize,
	onMaximize,
	onRestore,
	onClose,
}: WindowButtonsProps) {
	return (
		<div className="flex h-full">
			<Button
				size={"icon"}
				variant={"ghost"}
				className={"rounded-none border-0 w-9 h-8"}
				onClick={onMinimize}
			>
				<MinusIcon className="size-4" />
			</Button>
			<Button
				size={"icon"}
				variant={"ghost"}
				className={"rounded-none border-0 w-9 h-8"}
				onClick={isFullscreen ? onRestore : onMaximize}
			>
				{isFullscreen ? (
					<CopyIcon className="size-3.5 -scale-x-100" />
				) : (
					<SquareIcon className="size-3" />
				)}
			</Button>
			<Button
				size={"icon"}
				variant={"ghost"}
				className={"rounded-none border-0 w-9 h-8 hover:bg-red-600"}
				onClick={onClose}
			>
				<XIcon className="size-4.5" />
			</Button>
		</div>
	)
}
