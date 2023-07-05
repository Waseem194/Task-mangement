import React from "react";

import { Editor, EditorState } from "draft-js";

const MyEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
};
export default MyEditor;
