interface User {
  _id: string;
  username?: string;
  email: string;
  password: string;
  token?: string;
}

interface Task {
  _id?: string;
  taskName: string;
  description: string;
  status?: string;
  userId?: User["_id"];
}
