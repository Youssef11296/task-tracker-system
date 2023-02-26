import { Resolver } from "react-hook-form";
import { USERDATA_REGEX } from "../utils/regex";

const useAuthForms = () => {
  const registerFormResolver: Resolver<RegisterFormValues> = async (values) => {
    return {
      values:
        values.username && values?.email && values?.password ? values : {},
      errors: !values?.username
        ? {
            username: {
              type: "required",
              message: "Username is required",
            },
          }
        : !values.username.match(USERDATA_REGEX.USERNAME)
        ? {
            username: {
              type: "validate",
              message: "Username can not contain spaces or special characters.",
            },
          }
        : values.username.length < 2
        ? {
            username: {
              type: "min",
              message: "Username must contain 2 letters at least.",
            },
          }
        : values.username.length > 30
        ? {
            username: {
              type: "maxLength",
              message: "Username can not contain more than 30 letters.",
            },
          }
        : !values.email
        ? {
            email: {
              type: "required",
              message: "Email is required.",
            },
          }
        : !values.email.match(USERDATA_REGEX.EMAIL)
        ? {
            email: {
              type: "error",
              message: "Email must be valid.",
            },
          }
        : !values.password
        ? {
            password: {
              type: "required",
              message: "Password is required",
            },
          }
        : values.password.length < 6
        ? {
            password: {
              type: "minLength",
              message: "Password must contain 6 characters at least.",
            },
          }
        : {},
    };
  };

  const loginFormResolver: Resolver<LoginFormValues> = async (values) => {
    return {
      values: values?.email && values?.password ? values : {},
      errors: !values.email
        ? {
            email: {
              type: "required",
              message: "Email is required.",
            },
          }
        : !values.email.match(USERDATA_REGEX.EMAIL)
        ? {
            email: {
              type: "error",
              message: "Email must be valid.",
            },
          }
        : !values.password
        ? {
            password: {
              type: "required",
              message: "Password is required",
            },
          }
        : values.password.length < 6
        ? {
            password: {
              type: "minLength",
              message: "Password must contain 6 characters at least.",
            },
          }
        : {},
    };
  };

  const userSettingsFormResolver: Resolver<UserSettingsValues> = (values) => {
    return {
      values: !values.username || !values.email ? {} : values,
      errors: !values.username
        ? {
            username: {
              type: "required",
              message: "Username is required.",
            },
          }
        : !values.email
        ? {
            email: {
              type: "required",
              message: "Email is required.",
            },
          }
        : {},
    };
  };

  return { loginFormResolver, registerFormResolver, userSettingsFormResolver };
};

export { useAuthForms };
