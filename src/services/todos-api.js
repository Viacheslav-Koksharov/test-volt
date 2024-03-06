import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const getTodos = () => {
  return axios.get("/todos");
};

export const postTodo = (todo) => {
  return axios.post("/todos", todo);
};

export const delTodo = (id) => {
  return axios.delete(`/todos/${id}`);
};

export const udateTodo = (id, updatedData) => {
  return axios.put(`/todos/${id}`, updatedData);
};

export const toggle = (id, updatedData) => {
  return axios.put(`/todos/${id}`, updatedData);
};
