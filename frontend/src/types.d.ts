interface User {
  _id: string;
  username?: string;
  email: string;
  password: string;
  role: {
    roleId: string;
    roleName: string;
  };
  package: {
    packageId: string;
    packageName: string;
  };
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

interface Package {
  _id?: string;
  packageName: string;
  packageDescription: string;
  packagePrice: number;
}

interface VerificationRequest {
  _id?: string;
  userId: string;
  nationalIdNum: number;
  nationalIdImg: File;
}

type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};

type LoginFormValues = {
  email: string;
  password: string;
};

type UserSettingsValues = {
  username: string;
  email: string;
};

type CONFIRMATION_PURPOSE = "DELETE_TASK" | "LOGOUT";
