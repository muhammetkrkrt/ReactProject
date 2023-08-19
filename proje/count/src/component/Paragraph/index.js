import React from "react";

import Input from "../Input";

const Paragraph = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <>
      <Input onChange={onChange} />

      <p>ada</p>
    </>
  );
};

export default Paragraph;
