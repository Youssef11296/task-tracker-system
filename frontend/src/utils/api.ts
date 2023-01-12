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

export const getMe = (token: User["token"]) =>
  axios.get(`${baseUrlv1}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
