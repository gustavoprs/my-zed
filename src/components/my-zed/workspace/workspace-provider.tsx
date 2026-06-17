import { createContext, useState } from "react"

type WorkspaceContextValue = {
	isFullscreen: boolean
	maximizeWindow: () => void
	restoreWindow: () => void
	toggleFullscreen: () => void
}

export const WorkspaceContext = createContext<WorkspaceContextValue | null>(
	null,
)

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
	const [isFullscreen, setIsFullscreen] = useState(false)

	function maximizeWindow() {
		setIsFullscreen(true)
	}

	function restoreWindow() {
		setIsFullscreen(false)
	}

	function toggleFullscreen() {
		setIsFullscreen((prev) => !prev)
	}

	const value = {
		isFullscreen,
		maximizeWindow,
		restoreWindow,
		toggleFullscreen,
	}

	return (
		<WorkspaceContext.Provider value={value}>
			{children}
		</WorkspaceContext.Provider>
	)
}
