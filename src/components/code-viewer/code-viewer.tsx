import React from "react";
import { useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  selectAllowCamera,
  selectHeight,
  selectUrl,
  selectWidth,
} from "redux/app/app.selectors";
import { selectDarkMode } from "redux/ui/ui.selectors";

export const CodeViewer = () => {
  const height = useSelector(selectHeight);
  const width = useSelector(selectWidth);
  const url = useSelector(selectUrl);
  const darkMode = useSelector(selectDarkMode);

  const allowCamera = useSelector(selectAllowCamera);

  const style = darkMode ? darcula : docco;

  const codeMarkup = `
    new Ubble.IDV(<div id="iframe"></div>, {
        identificationUrl: "${url}",
        height: "${height}",
        width: "${width}",
        allowCamera: ${allowCamera},
        events: {
            onComplete: () => {
                // ...
            },
            onAbort: () => {
                // ... 
            }
        }
    });
  `;

  return (
    <SyntaxHighlighter language="javascript" style={style}>
      {codeMarkup}
    </SyntaxHighlighter>
  );
};
