import { UserList } from "../components/UserList";
import { useEffect } from "react";
import { getUsers } from "../services/user.api";
import { useState } from "react";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((u) => setUsers(u));
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};
