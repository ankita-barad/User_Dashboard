import { UserForm } from "../components/UserForm";
import { createUser } from "../services/user.api";

export const Create = () => {
  const handleSubmit = async (formData) => {
    // console.log(formData);
    await createUser(formData);
  };

  return (
    <div>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};
