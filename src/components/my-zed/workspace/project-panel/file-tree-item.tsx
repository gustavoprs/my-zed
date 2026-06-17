import { Link } from "@tanstack/react-router"
import { FolderIcon, FolderOpenIcon } from "lucide-react"
import FileTreeIcon from "#/components/my-zed/workspace/project-panel/file-tree-icon"
import { Button } from "#/components/ui/button"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "#/components/ui/collapsible"

type Item = {
	path: string
	children?: Item[]
}

interface FileTreeItemProps {
	item: Item
	level?: number
	defaultOpen?: boolean
}

export default function FileTreeItem({
	item,
	level = 0,
	defaultOpen = false,
}: FileTreeItemProps) {
	const fileName = item.path.split("/").pop()
	if (!fileName) {
		return
	}

	if (!item.children) {
		const extension = fileName?.split(".").pop() ?? "txt"

		return (
			<Button
				variant={"ghost"}
				className={
					"justify-start rounded-none w-full text-sm text-mz-text-muted transition-none hover:border-mz-border-focused hover:text-mz-text-muted aria-expanded:bg-transparent aria-expanded:text-mz-text-muted hover:aria-expanded:bg-accent"
				}
				style={{ paddingLeft: `${level * 20 + 6}px` }}
				render={
					<Link to={item.path}>
						<FileTreeIcon extension={extension} />
						{fileName}
					</Link>
				}
			/>
		)
	}

	return (
		<Collapsible className={"flex flex-col"} defaultOpen={defaultOpen}>
			<CollapsibleTrigger
				render={
					<Button
						variant={"ghost"}
						className={
							"justify-start rounded-none w-full text-sm text-mz-text-muted transition-none hover:border-mz-border-focused hover:text-mz-text-muted aria-expanded:bg-transparent aria-expanded:text-mz-text-muted hover:aria-expanded:bg-accent"
						}
						style={{ paddingLeft: `${level * 20 + 6}px` }}
					>
						<DynamicFolderIcon />
						{fileName}
					</Button>
				}
			/>
			<CollapsibleContent className={"relative flex flex-col flex-1"}>
				<div
					className="absolute z-1 py-1 h-full"
					style={{ left: `${level * 20 + 15}px` }}
				>
					<hr className="w-px h-full bg-mz-text/10" />
				</div>
				{item.children.map((item) => (
					<FileTreeItem key={`${fileName}`} item={item} level={level + 1} />
				))}
			</CollapsibleContent>
		</Collapsible>
	)
}

function DynamicFolderIcon() {
	return (
		<>
			<FolderIcon
				color="#45403d"
				fill="#45403d"
				className="size-4 group-aria-expanded/button:hidden"
			/>
			<FolderOpenIcon
				fill="#45403d"
				className="hidden size-4.5 text-mz-panel-background transition-none group-hover/button:text-accent group-aria-expanded/button:block"
			/>
		</>
	)
}
