import FileTreeItem from "#/components/my-zed/workspace/project-panel/file-tree-item"

const FILE_TREE = [
	{
		path: "/my-zed",
		children: [
			{
				path: "/my-zed/tooling",
				children: [
					{
						path: "/my-zed/biome.json",
					},
				],
			},
			{
				path: "/my-zed/README.ts",
			},
		],
	},
]

export default function FileTree() {
	return FILE_TREE.map((item) => (
		<FileTreeItem key={item.path} item={item} defaultOpen />
	))
}
