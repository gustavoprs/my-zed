import { useEffect, useState } from "react"
import { cn } from "#/lib/utils"

export default function Window({ children }: { children?: React.ReactNode }) {
	const isFullscreen = true
	const [aspectRatio, setAspectRatio] = useState(16 / 9)

	useEffect(() => {
		function updateAspectRatio() {
			setAspectRatio(window.innerWidth / window.innerHeight)
		}

		updateAspectRatio()

		window.addEventListener("resize", updateAspectRatio)

		return () => {
			window.removeEventListener("resize", updateAspectRatio)
		}
	}, [])

	return (
		<div
			className={cn(
				"border-[#38393d] shadow-[0_0_32px_rgba(0,0,0,0.25)] overflow-hidden",
				isFullscreen ? "w-svw h-svh" : "border w-[85svw] rounded-lg",
			)}
			style={{ aspectRatio: aspectRatio }}
		>
			{children}
		</div>
	)
}
