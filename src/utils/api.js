const baseUrl = "http://localhost:3001";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const getItemCards = () => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-type": "application/json",
    },
  }).then(handleResponse);
};

const api = { getItemCards };

export default api;
