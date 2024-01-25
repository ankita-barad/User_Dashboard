import { useState } from "react";
import { useParams } from "react-router-dom";
import { editUser, getUser } from "../services/user.api";
import { useEffect } from "react";
import { UserForm } from "../components/UserForm";
export const Edit = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(userId).then((u) => setUser(u));
  }, [userId]);

  const handleSubmit = async (formData) => {
    await editUser({ id: userId, ...formData });
  };

  return (
    <div>
      <UserForm onSubmit={handleSubmit} user={user} />
    </div>
  );
};
