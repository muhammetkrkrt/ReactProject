import React from "react";
import axios from "axios";
import "./index.scss";

const Form = ({ onChange }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: e.target.firstName.value,
      surName: e.target.surName.value,
      gender: e.target.gender.value,
      age: e.target.age.value,
      isAdmin: e.target.isAdmin.value,
    };

    axios.post("http://localhost:5000/user", data).then((res) => {
      console.log(res.data);
      onChange(res.data.id);
    });
  };

  return (
    <form className="userForm" onSubmit={onSubmit}>
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="surName" placeholder="Surname" />
      <label>
        <input type="radio" name="gender" value="Man" />
        Man
      </label>
      <label>
        <input type="radio" name="gender" value="Woman" />
        Woman
      </label>
      <input type="number" name="age" placeholder="Age" />
      <select name="isAdmin">
        <option value="X">Yes</option>
        <option value="">No</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
