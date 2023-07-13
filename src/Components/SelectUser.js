import React from "react";
import { Form } from "react-bootstrap";
import users from "../users.json";

const SelectUser = ({  selectUser, setSelectUser }) => {
  const handleOnChange = (e) => {
    setSelectUser(e.target.value);
  };
  return (
    <Form.Select aria-label="Default select example" onChange={handleOnChange} value={selectUser}>
      <option>Users</option>
      {users.map((user, index) => {
        return (
          <option key={index} value={user.name}>
            {user.name}: {user.email}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default SelectUser;
