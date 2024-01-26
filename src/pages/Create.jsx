import { UserForm } from "../components/UserForm";
import { createUser } from "../services/user.api";
import Navigation from "../components/Navigation";

/**
 * Create Component:
 * Represents the page for adding a new user.
 * Renders a navigation bar, a form for adding user information, and handles form submission.
 */

export const Create = () => {
  const handleSubmit = async (formData) => {
    // console.log(formData);
    await createUser(formData);
  };

  return (
    <div>
      <Navigation />
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/3 p-8 bg-blue-100 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">ADD USER</h2>
          <UserForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};
