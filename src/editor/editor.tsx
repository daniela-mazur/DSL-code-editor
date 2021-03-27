import MonacoEditor, { Monaco } from "@monaco-editor/react";

import { monarchTokens } from "./utils/monarchTokens";

const LANGUAGE_ID = "GEOMETRY_DSL";

const editorWillMount = (monaco: Monaco) => {
  // Register a new language
  monaco.languages.register({ id: LANGUAGE_ID });
  // Register a tokens provider for the language
  monaco.languages.setMonarchTokensProvider(LANGUAGE_ID, monarchTokens);
};

const Editor = () => {
  return (
    <MonacoEditor
      height="100%"
      language={LANGUAGE_ID}
      theme="vs-dark"
      beforeMount={editorWillMount}
    />
  );
};

export { Editor };
