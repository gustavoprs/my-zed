import Workspace from "#/components/my-zed/workspace"
import TitleBar from "#/components/my-zed/workspace/title-bar"
import { useWorkspace } from "#/components/my-zed/workspace/use-workspace"
import { WorkspaceProvider } from "#/components/my-zed/workspace/workspace-provider"
import Window from "#/components/window"

export default function MyZed() {
	return (
		<WorkspaceProvider>
			<MyZedWindow />
		</WorkspaceProvider>
	)
}

function MyZedWindow() {
	const { isFullscreen, maximizeWindow, restoreWindow } = useWorkspace()

	return (
		<Window
			isFullscreen={isFullscreen}
			onMaximize={maximizeWindow}
			onRestore={restoreWindow}
			titleBar={<TitleBar />}
		>
			<Workspace />
		</Window>
	)
}
