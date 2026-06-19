import json from "@shikijs/langs/json"
import markdown from "@shikijs/langs/markdown"
import yaml from "@shikijs/langs/yaml"
import dracula from "@shikijs/themes/dracula"
import { createHighlighterCoreSync } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"
import { gitignoreLanguage } from "#/lib/highlighting/languages/gitignore"

export const highlighter = createHighlighterCoreSync({
	themes: [dracula],
	langs: [json, markdown, gitignoreLanguage, yaml],
	engine: createJavaScriptRegexEngine(),
})

type SupportedLanguage = "gitignore" | "json" | "markdown" | "text" | "yaml"

const languageByExtension: Record<string, SupportedLanguage> = {
	json: "json",
	md: "markdown",
	markdown: "markdown",
	yaml: "yaml",
	yml: "yaml",
}
const languageByFileName: Record<string, SupportedLanguage> = {
	".gitignore": "gitignore",
}

export function getLanguage(
	fileName: string,
	extension: string,
): SupportedLanguage {
	return (
		languageByFileName[fileName.toLowerCase()] ??
		languageByExtension[extension.toLowerCase()] ??
		"text"
	)
}
