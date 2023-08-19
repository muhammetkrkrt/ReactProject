import { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";

const Table = ({ newUserId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => setUsers(response.data));
  }, [newUserId]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>AGE</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.firstName} {user.surName}
              </td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.isAdmin}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
