export default function AppFrame({ children }: { children?: React.ReactNode }) {
	return (
		<div className="flex justify-center items-center max-w-svw max-h-svh w-svw h-svh bg-app-background bg-radial from-app-accent from-50% to-app-background overflow-hidden">
			{children}
		</div>
	)
}
