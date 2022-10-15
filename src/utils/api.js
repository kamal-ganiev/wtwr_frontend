const baseUrl = "http://localhost:3001/items";

const header = {
  "Content-type": "application/json",
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItemCards = () => {
  return fetch(`${baseUrl}`, {
    headers: header,
  }).then(handleResponse);
};

const addItemCard = ({ id, name, imageUrl, weather }) => {
  return fetch(`${baseUrl}`, {
    method: "POST",
    headers: header,
    body: JSON.stringify({
      id,
      name,
      weather,
      imageUrl,
    }),
  }).then(handleResponse);
};

const removeItemCard = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: header,
  }).then(handleResponse);
};

const api = {
  getItemCards,
  addItemCard,
  removeItemCard,
};

export default api;
