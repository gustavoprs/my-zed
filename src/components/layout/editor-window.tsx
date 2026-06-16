export default function EditorWindow({
	children,
}: {
	children?: React.ReactNode
}) {
	return (
		<div className="rounded-lg border w-[85svw] aspect-video border-[#38393d] shadow-[0_0_32px_rgba(0,0,0,0.25)] overflow-hidden">
			{children}
		</div>
	)
}
