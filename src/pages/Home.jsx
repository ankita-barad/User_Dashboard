import { UserList } from "../components/UserList";
import { useEffect, useState } from "react";
import { getUsers } from "../services/user.api";

/**
 * Home Component:
 * Represents the main page displaying a paginated list of users.
 * Fetches user data from the API, manages pagination, and renders the UserList and Pagination components.
 */

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    getUsers().then((u) => setUsers(u));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <UserList users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ usersPerPage, totalUsers, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number} className="mx-2">
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              } rounded focus:outline-none`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
