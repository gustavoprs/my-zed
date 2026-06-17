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
		<Button
			variant={"ghost"}
			className={
				"group ps-5 pe-1 h-full text-sm hover:bg-transparent text-mz-text-muted hover:text-mz-text-muted"
			}
			render={
				<Link
					to={file.path}
					activeProps={{ className: "!text-mz-text" }}
					activeOptions={{ exact: true }}
				>
					<FileTreeIcon extension={fileName?.split(".").pop() ?? "txt"} />
					{fileName}
					<Button
						size={"icon-xs"}
						variant={"ghost"}
						className={
							"opacity-0 text-mz-text-muted hover:text-mz-text-muted group-hover:opacity-100"
						}
						render={
							<Link to="/my-zed">
								<XIcon />
							</Link>
						}
					/>
				</Link>
			}
		/>
	)
}
