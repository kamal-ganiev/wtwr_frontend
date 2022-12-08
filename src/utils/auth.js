export const BASE_URL = "http://localhost:3002";
export const header = {
  "Content-Type": "application/json",
};

export const register = (name, avatar, email, password) => {
  fetch(`${BASE_URL}/signup`, {
    headers: header,
    body: JSON.stringify({ name, avatar, email, password }),
  });
};

export const login = (email, password) => {
  fetch(`${BASE_URL}/signin`, {
    headers: header,
    body: JSON.stringify({ email, password }),
  });
};
