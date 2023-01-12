import axios from "axios";

const axiosInstance = (token: User["token"]) => {
  return axios.create({ headers: { Authorization: `Bearer ${token}` } });
};

export { axiosInstance };
