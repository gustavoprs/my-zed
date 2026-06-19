import type { LanguageRegistration } from "shiki"

export const gitignoreLanguage: LanguageRegistration = {
	name: "gitignore",
	scopeName: "source.gitignore",
	repository: {},
	patterns: [
		{
			match: "^#.*$",
			name: "comment.line.number-sign.gitignore",
		},
		{
			match: "^!",
			name: "keyword.operator.negation.gitignore",
		},
		{
			match: "[*?]",
			name: "keyword.operator.glob.gitignore",
		},
		{
			match: "\\[[^\\]]+\\]",
			name: "constant.other.character-class.gitignore",
		},
		{
			match: "[^*?!\\[\\]]+",
			name: "string.unquoted.pattern.gitignore",
		},
	],
}
