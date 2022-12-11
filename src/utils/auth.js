const BASE_URL = "http://localhost:3002";

const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const handleResponse = (res) => {
  try {
    if (res.status === 200) {
      return res.json();
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

const register = async (name, avatar, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ name, avatar, email, password }),
    });
    handleResponse(res);
  } catch (err) {
    return err;
  }
};

const login = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ email, password }),
    });
    handleResponse(res);
  } catch (err) {
    return err;
  }
};

export const auth = {
  register,
  login,
};
