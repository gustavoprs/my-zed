import { createContext, useState } from "react"

type WorkspaceContextValue = {
	isMaximized: boolean
	maximizeWindow: () => void
	restoreWindow: () => void
	toggleFullscreen: () => void
}

export const WorkspaceContext = createContext<WorkspaceContextValue | null>(
	null,
)

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
	const [isMaximized, setIsMaximized] = useState(false)

	function maximizeWindow() {
		setIsMaximized(true)
	}

	function restoreWindow() {
		setIsMaximized(false)
	}

	function toggleFullscreen() {
		setIsMaximized((prev) => !prev)
	}

	const value = {
		isMaximized,
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
