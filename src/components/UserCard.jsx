import { Link } from "react-router-dom";

/**
 * UserCard Component:
 * Displays information about a user in a card format.
 * Provides options to edit or delete the user.
 *
 * @param {Object} user - The user data to be displayed.
 * @param {Function} handleDeleteClick - Callback function to handle the delete action.
 */

export const UserCard = ({ user, handleDeleteClick }) => {
  const { id, name, username, email, company } = user;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg mb-4">
      <div className="p-6">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">ID: {id}</p>
        <p className="text-gray-600">Username: {username}</p>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Department: {company.name}</p>

        <div className="flex mt-4">
          <Link to={`/${id}/edit`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600">
              Edit
            </button>
          </Link>

          <button
            onClick={() => handleDeleteClick(id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
