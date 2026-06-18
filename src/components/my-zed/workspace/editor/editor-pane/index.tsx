import { ScrollArea } from "#/components/ui/scroll-area"
import { getLanguage, highlighter } from "#/lib/highlighter"
import type { WorkspaceFile } from "#/lib/types"
import { cn } from "#/lib/utils"

interface EditorPaneProps {
	file: WorkspaceFile
}

export default function EditorPane({ file }: EditorPaneProps) {
	const lang = getLanguage(file.extension)

	const { tokens } = highlighter.codeToTokens(file.content, {
		theme: "dracula",
		lang,
	})

	return (
		<ScrollArea
			className={"relative min-h-0 w-full flex-1 bg-mz-editor-background"}
			scrollBarClassName="min-w-4"
			thumbClassName="rounded-none opacity-95"
		>
			<div className="absolute top-0 right-3.5 py-px w-px h-full">
				<div className="size-full bg-mz-border-focused"></div>
			</div>
			<div className="flex flex-col py-1 font-mono text-[15px] leading-6">
				{tokens.map((lineTokens, lineIndex) => {
					const key = `line-${lineIndex}`

					return (
						<div key={key} className="flex gap-6.5 pe-5">
							<span className="shrink-0 w-14 text-right text-mz-text-muted select-none">
								{lineIndex + 1}
							</span>
							<pre className="px-1 min-w-0 flex-1 whitespace-pre-wrap wrap-break-word">
								<code>
									{lineTokens.map((token, tokenIndex) => {
										const key = `token-${tokenIndex}-${lineIndex}`

										const fontStyle =
											token.fontStyle && token.fontStyle > 0
												? token.fontStyle
												: 0

										const isItalic = Boolean(fontStyle & 1)
										const isBold = Boolean(fontStyle & 2)
										const isUnderline = Boolean(fontStyle & 4)
										const isStrikethrough = Boolean(fontStyle & 8)

										return (
											<span
												key={key}
												className={cn(
													isItalic && "italic",
													isBold && "font-bold",
													isUnderline && !isStrikethrough && "underline",
													isStrikethrough && !isUnderline && "line-through",
													isUnderline &&
														isStrikethrough &&
														"[text-decoration-line:underline_line-through]",
												)}
												style={{
													backgroundColor: token.bgColor,
													color: token.color,
												}}
											>
												{token.content}
											</span>
										)
									})}
								</code>
							</pre>
						</div>
					)
				})}
			</div>
		</ScrollArea>
	)
}
