const BASE_URL = "http://localhost:3001";

const header = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const handleResponse = (res) => {
  if (res.status === 201 || res.status === 200) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
};

const register = ({ name, avatar, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => handleResponse(res));
};

const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({ email, password }),
  }).then((res) => handleResponse(res));
};

const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => handleResponse(res));
};

const updateUserData = (name, avatar) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => handleResponse(res));
};

export const auth = {
  register,
  login,
  checkToken,
  updateUserData,
};
