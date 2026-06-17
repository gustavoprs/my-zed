import type { WindowButtonsProps } from "#/components/window/window-buttons"
import WindowButtons from "#/components/window/window-buttons"
import { cn } from "#/lib/utils"

interface WindowProps extends WindowButtonsProps {
	className?: string
	titleBar?: React.ReactNode
	children?: React.ReactNode
}

export default function Window({
	isFullscreen = false,
	className,
	titleBar,
	children,
	...props
}: WindowProps) {
	return (
		<div
			className={cn(
				"flex flex-col border-[#38393d] bg-background shadow-[0_0_32px_rgba(0,0,0,0.25)] overflow-hidden",
				isFullscreen ? "w-svw h-svh" : "border w-[85svw] h-[85svh] rounded-lg",
				className,
			)}
		>
			<header className="flex justify-between items-center w-full max-h-8 min-h-8">
				{titleBar}
				<WindowButtons isFullscreen={isFullscreen} {...props} />
			</header>
			{children}
		</div>
	)
}
