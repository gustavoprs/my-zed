import { Link } from "@tanstack/react-router"
import { XIcon } from "lucide-react"
import FileTreeIcon from "#/components/my-zed/workspace/project-panel/file-tree-icon"
import { Button } from "#/components/ui/button"

interface FileTabProps {
	file: {
		path: string
	}
}

export default function FileTab({ file }: FileTabProps) {
	const fileName = file.path.split("/").pop()

	return (
		<div className="group flex items-center relative">
			<Button
				variant={"ghost"}
				className={
					"px-5 pe-5.5 h-full text-sm hover:bg-transparent text-mz-text-muted hover:text-mz-text-muted"
				}
				nativeButton={false}
				render={
					<Link
						to={file.path}
						activeProps={{ className: "!text-mz-text" }}
						activeOptions={{ exact: true }}
					>
						<FileTreeIcon extension={fileName?.split(".").pop() ?? "txt"} />
						{fileName}
					</Link>
				}
			/>
			<Button
				size={"icon-xs"}
				variant={"ghost"}
				className={
					"absolute right-px opacity-0 text-mz-text-muted hover:text-mz-text-muted group-hover:opacity-100"
				}
				nativeButton={false}
				render={
					<Link to="/my-zed">
						<XIcon />
					</Link>
				}
			/>
		</div>
	)
}
