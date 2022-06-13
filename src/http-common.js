export default axios.create({
  baseURL: "http://localhost:5000/operatorsDb",
  headers: {
    "Content-type": "application/json",
  },
});
