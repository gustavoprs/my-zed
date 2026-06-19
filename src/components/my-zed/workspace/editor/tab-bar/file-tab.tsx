import { Link } from "@tanstack/react-router"
import { XIcon } from "lucide-react"
import FileIcon from "#/components/file-icon"
import { Button } from "#/components/ui/button"

interface FileTabProps {
	file: {
		path: string
	}
}

export default function FileTab({ file }: FileTabProps) {
	const fileName = file.path.split("/").pop()

	if (!fileName) {
		return
	}

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
						<FileIcon
							fileName={fileName}
							fileExtension={fileName?.split(".").pop()}
						/>
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
