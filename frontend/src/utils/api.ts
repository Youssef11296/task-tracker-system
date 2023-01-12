import axios from "axios";

const baseUrl = "http://localhost:4000/api";
const baseUrlv1 = `${baseUrl}/v1`;

export const registerUser = (
  username: User["username"],
  email: User["email"],
  password: User["password"]
) => axios.post(`${baseUrlv1}/auth/register`, { username, email, password });

export const loginUser = (email: User["email"], password: User["password"]) =>
  axios.post(`${baseUrlv1}/auth/login`, { email, password });

export const getUser = (userId: User["_id"]) =>
  axios.get(`${baseUrlv1}/users/${userId}`);
