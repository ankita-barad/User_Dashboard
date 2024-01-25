import { useEffect } from "react";
import { useState } from "react";

export const UserForm = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        department: user.company.name,
      });
    }
  }, [user]);

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error when the user types
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);

      setFormData({
        username: "",
        email: "",
        department: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-6"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={`w-full border rounded-md py-2 px-3 ${
            errors.username && "border-red-500"
          }`}
          required
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full border rounded-md py-2 px-3 ${
            errors.email && "border-red-500"
          }`}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="department"
        >
          Department
        </label>
        <input
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className={`w-full border rounded-md py-2 px-3 ${
            errors.department && "border-red-500"
          }`}
          required
        />
        {errors.department && (
          <p className="text-red-500 text-xs mt-1">{errors.department}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};
