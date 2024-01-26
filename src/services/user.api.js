//Fetches the list of users from the API
export const getUsers = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//Deletes a user with the specified ID from the API.
export const deleteUser = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//Creates a new user by sending user data to the API.
export const createUser = async (user) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//Edits an existing user by sending updated user data to the API.
export const editUser = async (user) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${user.id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

//Fetches the details of a user with the specified ID from the API.
export const getUser = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/${id}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
