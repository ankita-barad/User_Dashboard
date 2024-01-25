import { useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";
import { UserCard } from "./UserCard";
import { deleteUser } from "../services/user.api";

export const UserList = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleDeleteClick = (id) => {
    setModalOpen(true);
    console.log(id);
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
      <h1>User List</h1>
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
