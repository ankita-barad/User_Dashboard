import { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmationModal } from "./ConfirmationModal";
import { UserCard } from "./UserCard";
import { deleteUser } from "../services/user.api";

/**
 * UserList Component:
 * Displays a list of users in a dashboard layout.
 * Allows users to be deleted with a confirmation modal.
 *
 * @param {Array} users - The array of user data to be displayed.
 */

export const UserList = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleDeleteClick = (id) => {
    setModalOpen(true);
    setCurrentUserId(id);
  };

  const handleCancelDelete = () => {
    setModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    await deleteUser(currentUserId);
    setModalOpen(false);
    // re-call the getUsers api in an ideal scenario
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <div>
          <h6 className="text-xl font-bold">DASHBOARD</h6>
        </div>
        <div>
          <Link
            to="/create"
            className="text-white px-6 py-3 rounded bg-green-500 hover:bg-green-600"
          >
            ADD USER
          </Link>
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-4">
        {users.map((user) => (
          <div key={user.id} className="user-card-container">
            <UserCard user={user} handleDeleteClick={handleDeleteClick} />
          </div>
        ))}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
