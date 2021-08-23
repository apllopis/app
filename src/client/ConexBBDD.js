import axios from "axios";

export const getAllNotas = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      const { data } = response;
      return data;
    });
};
export const createNota = ({ title, body, userId }) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", { title, body, userId })
    .then((response) => {
      const { data } = response;
      return data;
    });
};