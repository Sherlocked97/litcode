import React from "react"
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic(
	() => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
	{ ssr: false }
  );

export default function SolutionArea() {
	const [code, setCode] = React.useState(
	`function add(a, b) {\n  return a + b;\n}`
	);

	return (
		<div className="code-area">
			<div className="w-60 border-2 rounder-l">
				<CodeEditor
					value={code}
					language="c"
					placeholder="Please enter your solution."
					onChange={(evn) => setCode(evn.target.value)}
					padding={15}
					style={{
						fontSize: 12,
						backgroundColor: "#f5f5f5",
						fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
					}}
				/>
			</div>
			<div className="mr-4 pt-2 pr-80">
				<div className="mt-2">
					<button className="text-base bg-transparent hover:bg-green-500 text-green-700 font-mono hover:text-white py-0 px-2 border border-green-500 hover:border-transparent rounded">
						Submit
					</button>
					<button className="ml-10 text-base bg-transparent hover:bg-green-500 text-green-700 font-mono hover:text-white py-0 px-2 border border-green-500 hover:border-transparent rounded">
						Test
					</button>
				</div>
			</div>
		</div>
	)
}