import React, { useState } from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";

const Users = () => {
  const [newUserId, setNewUserId] = useState();

  const onChange = (id) => {
    setNewUserId(id);
  };
  return (
    <>
      <Form onChange={onChange} />
      <Table newUserId={newUserId} />
    </>
  );
};

export default Users;
