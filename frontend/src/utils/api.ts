import axios, { AxiosResponse } from "axios";

const baseUrl = "http://localhost:4000/api";
const baseUrlv1 = `${baseUrl}/v1`;

export const authAPI = {
  registerUser: (
    username: User["username"],
    email: User["email"],
    password: User["password"]
  ) => axios.post(`${baseUrlv1}/auth/register`, { username, email, password }),

  loginUser: (email: User["email"], password: User["password"]) =>
    axios.post(`${baseUrlv1}/auth/login`, { email, password }),

  getMe: (token: User["token"]) =>
    axios.get(`${baseUrlv1}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  sendVerificationRequest: (
    token: User["token"],
    nationalIdNum: number,
    nationalIdImg: File
  ) =>
    axios.post(
      `${baseUrlv1}/verifications`,
      { nationalIdNum, nationalIdImg },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),
};

export const tasksAPI = {
  getAllTasks: (token: User["token"]) =>
    axios.get(`${baseUrlv1}/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  createTask: (
    token: User["token"],
    taskName: Task["taskName"],
    description: Task["description"],
    status: Task["status"]
  ) =>
    axios.post(
      `${baseUrlv1}/tasks`,
      { taskName, description, status },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),

  updateTask: (token: User["token"], task: Task, taskId: Task["_id"]) =>
    axios.patch(
      `${baseUrlv1}/tasks/${taskId}`,
      { ...task },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    ),

  deleteTask: (token: User["token"], taskId: Task["_id"]) =>
    axios.delete(`${baseUrlv1}/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const packagesAPI = {
  getAllPackages: () => axios.get(`${baseUrlv1}/packages`),
  choosePackage: (token: User["token"], packageId: Package["_id"]) => {
    axios.patch(
      `${baseUrlv1}/packages/choose`,
      {
        packageId,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },
};
