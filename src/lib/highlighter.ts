import json from "@shikijs/langs/json"
import markdown from "@shikijs/langs/markdown"
import dracula from "@shikijs/themes/dracula"
import { createHighlighterCoreSync } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"

export const highlighter = createHighlighterCoreSync({
	themes: [dracula],
	langs: [json, markdown],
	engine: createJavaScriptRegexEngine(),
})

type SupportedLanguage = "json" | "markdown" | "text"

const languageByExtension: Record<string, SupportedLanguage> = {
	json: "json",
	md: "markdown",
	markdown: "markdown",
}

export function getLanguage(extension: string): SupportedLanguage {
	return languageByExtension[extension.toLowerCase()] ?? "text"
}
