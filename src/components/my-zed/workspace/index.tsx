import { Outlet } from "@tanstack/react-router"
import ProjectPanel from "#/components/my-zed/workspace/project-panel"
import StatusBar from "#/components/my-zed/workspace/status-bar"
import { ResizablePanel, ResizablePanelGroup } from "#/components/ui/resizable"

export default function Workspace() {
	return (
		<div className="flex flex-col w-full flex-1 bg-mz-canvas-default overflow-hidden">
			<ResizablePanelGroup orientation="horizontal" className="h-auto">
				<ResizablePanel>
					<Outlet />
				</ResizablePanel>
				<ResizablePanel
					defaultSize={"300px"}
					groupResizeBehavior="preserve-pixel-size"
				>
					<ProjectPanel />
				</ResizablePanel>
			</ResizablePanelGroup>
			<StatusBar />
		</div>
	)
}
