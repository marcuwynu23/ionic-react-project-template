import axios from "./axios";

async function getTodos() {
  try {
    const response = await axios.get("/todos");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const api = {
  getTodos,
};

export default api;
