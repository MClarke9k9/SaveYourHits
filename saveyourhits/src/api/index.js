import ky from 'ky';

// Only 1 😃
const baseUrl = `${process.env.REACT_APP_KEY}`;

const api = {
  index() {
    return ky.get(baseUrl).json();
  },

  update(payload, id) {
    return ky.put(`${baseUrl}/${id}`, { json: payload });
  },

  create(payload) {
    return ky.post(baseUrl, { json: payload }).json();
  },

  delete(id) {
    return ky.delete(`${baseUrl}/${id}`);
  },
};

export default api;
