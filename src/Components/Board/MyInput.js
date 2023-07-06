import React, { Fragment, useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { BoardContext } from "../context";
import "./MyInput.css";
const MyInput = ({ handleCancel, boardType }) => {
  const [value, setValue] = useState("");
  const [validated, setValidated] = useState(false);
  const { dispatch } = useContext(BoardContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      console.log(value);
      dispatch({
        payload: {
          boardType,
          title: value,
        },
        type: "cardData",
      });
    }
  };
  return (
    <Fragment>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <textarea
          value={value}
          onChange={(event) => {
            setValidated(true);
            setValue(event.target.value);
          }}
          placeholder="Enter your task"
        />
        <div className="btn_icon">
          <Button variant="success" className="add_btn" type="submit">
            Add card
          </Button>
          <FontAwesomeIcon
            icon={faXmark}
            className="Icon"
            onClick={handleCancel}
          />
        </div>
      </Form>
    </Fragment>
  );
};
export default MyInput;
