import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ children }) => {
  return (
    <SyntaxHighlighter
      className="rounded p-3 bg-dark"
      language="javascript"
      style={vs2015}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;
