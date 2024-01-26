import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editUser, getUser } from "../services/user.api";
import { UserForm } from "../components/UserForm";
import Navigation from "../components/Navigation";

/**
 * Edit Component:
 * Represents the page for editing an existing user.
 * Renders a navigation bar, a form for updating user information, and handles form submission.
 */

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
      <Navigation /> {/* Include the Navigation component here */}
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/3 p-8 bg-blue-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">EDIT USER </h2>
          <UserForm onSubmit={handleSubmit} user={user} />
        </div>
      </div>
    </div>
  );
};
