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
