import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
const Editor = ({ editor, setEditor }) => {
  const handleOnChange = (e) => {
    setEditor(e.target.value);
    console.log(editor);
  
  };
  return (
    <Fragment>
      <textarea
        value={editor}
        onChange={handleOnChange}
        placeholder="Enter your task..."
        style={{ width: "100%" }}
      />
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Fragment>
  );
};

export default Editor;
