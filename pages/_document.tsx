import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head />
			{/* or cyan: bg-cyan-800 */}
			<body className="bg-cyan-500 dark:bg-cyan-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
