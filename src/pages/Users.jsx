import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      console.log("There was an error fetching the users!", error);
    }
  }
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`/user/${id}/${name}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
