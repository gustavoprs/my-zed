import FileTree from "#/components/my-zed/workspace/project-panel/file-tree"

export default function ProjectPanel() {
	return (
		<section className="flex flex-col h-full bg-mz-panel-background">
			<FileTree />
		</section>
	)
}
