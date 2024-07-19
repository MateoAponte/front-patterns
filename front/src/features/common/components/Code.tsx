import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import { Divider } from './Divider.tsx';

interface CodeInterface {
	code: string[];
}

export const PTCode: React.FC<CodeInterface> = ({ code }) => {
	console.log(code);
	
	return (
		<>
			{
				code.map((codeString) => <>
					<CodeMirror value={codeString} extensions={[javascript({ jsx: true })]} theme={vscodeDark} />
					<Divider orientation="horizontal" show={true} />
				</> )
			}
		</>
	)
}

export default {};