interface User {
  _id: string;
  username?: string;
  email: string;
  password: string;
  verifications: {
    nationalId: number;
    nationalIdImg: File;
  };
  verificationSent: boolean;
  verified: boolean;
  token?: string;
}

interface Task {
  _id?: string;
  taskName: string;
  description: string;
  status?: string;
  userId?: User["_id"];
  createdAt?: string;
}

interface VerificationRequest {
  _id?: string;
  userId: string;
  nationalIdNum: number;
  nationalIdImg: File;
}

type CONFIRMATION_PURPOSE = "DELETE_TASK" | "LOGOUT";
