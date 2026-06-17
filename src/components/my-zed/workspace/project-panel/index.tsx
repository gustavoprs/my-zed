import FileTree from "#/components/my-zed/workspace/project-panel/file-tree"
import { ScrollArea } from "#/components/ui/scroll-area"

export default function ProjectPanel() {
	return (
		<section className="flex flex-col h-full bg-mz-panel-background">
			<ScrollArea className={"w-full h-full"}>
				<FileTree />
			</ScrollArea>
		</section>
	)
}
