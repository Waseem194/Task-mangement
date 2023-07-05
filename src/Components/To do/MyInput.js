import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./MyInput.css";
const MyInput = ({handleCancel}) => {
  const [value, setValue] = useState("");
  const onChange = (evt) => setValue(evt.target.value);

  return (
    <Fragment>
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Enter your task"
      />
      <div className="btn_icon">
      <Button variant="success" className="add_btn">Add card</Button>
      <FontAwesomeIcon icon={faXmark} className="Icon" onClick={handleCancel}/>
      </div>
    </Fragment>
  );
};
export default MyInput;
