import axios from "axios";

const baseUrl = "http://localhost:4000/api";
const baseUrlv1 = `${baseUrl}/v1`;

export const registerUser = ({ username, email, password }: User) =>
  axios.post(`${baseUrlv1}/auth/register`, { username, email, password });

export const loginUser = ({ email, password }: User) =>
  axios.post(`${baseUrlv1}/auth/login`, { email, password });
