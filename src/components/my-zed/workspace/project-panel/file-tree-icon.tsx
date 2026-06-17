import { TextAlignStartIcon } from "lucide-react"

interface FileTreeIconProps {
	extension: string
}

export default function FileTreeIcon({ extension }: FileTreeIconProps) {
	switch (extension) {
		case "json":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					viewBox="0 0 24 24"
					className="size-4"
				>
					<title>JSON Icon</title>
					<path
						fill="#fbc02d"
						d="M5 3h2v2H5v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0-2-2H0v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3zm-7 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"
					></path>
				</svg>
			)
		case "md":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={32}
					height={32}
					viewBox="0 0 32 32"
					className="size-4"
				>
					<title>Mardown Icon</title>
					<path
						fill="#42a5f5"
						d="m14 10l-4 3.5L6 10H4v12h4v-6l2 2l2-2v6h4V10zm12 6v-6h-4v6h-4l6 8l6-8z"
					></path>
				</svg>
			)
		case "ts":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					viewBox="0 0 24 24"
					className="size-4"
				>
					<title>TypeScript Icon</title>
					<path
						fill="#0288d1"
						d="M3 3h18v18H3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03zM13 11.25H8v1.5h1.5V20h1.75v-7.25H13z"
					></path>
				</svg>
			)
		default:
			return <TextAlignStartIcon color="#606164" className="size-4" />
	}
}
