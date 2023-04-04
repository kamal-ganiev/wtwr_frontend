const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr-server.mooo.com"
    : "http://localhost:3000";

function header() {
  return {
    Accept: "application/json",
    "Content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  };
}

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.statusText}`);
  }
};

const getItemCards = async () => {
  const res = await fetch(`${baseUrl}`, {
    headers: header(),
  });
  return handleResponse(res);
};

const addItemCard = async ({ id, name, imageUrl, weather }) => {
  const res = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: header(),
    body: JSON.stringify({
      id,
      name,
      weather,
      imageUrl,
    }),
  });
  return handleResponse(res);
};

const removeItemCard = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: header(),
  }).then((res) => handleResponse(res));
};

const addLike = (id) => {
  return fetch(`${baseUrl}/${id}/likes`, {
    method: "PUT",
    headers: header(),
  }).then((res) => handleResponse(res));
};

const removeLike = (id) => {
  return fetch(`${baseUrl}/${id}/likes`, {
    method: "DELETE",
    headers: header(),
  }).then((res) => handleResponse(res));
};

const api = {
  getItemCards,
  addItemCard,
  removeItemCard,
  addLike,
  removeLike,
};

export default api;
