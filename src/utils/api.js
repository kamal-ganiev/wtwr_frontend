import { token } from "./constants";

const baseUrl = "http://localhost:3001/items";

const header = {
  "Content-type": "application/json",
  authorization: `Bearer ${token}`,
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItemCards = async () => {
  const res = await fetch(`${baseUrl}`, {
    headers: header,
  });
  return handleResponse(res);
};

const addItemCard = async ({ id, name, imageUrl, weather }) => {
  const res = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      id,
      name,
      weather,
      imageUrl,
    }),
  });
  return handleResponse(res);
};

const removeItemCard = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: header,
  });
  return handleResponse(res);
};

const api = {
  getItemCards,
  addItemCard,
  removeItemCard,
};

export default api;
