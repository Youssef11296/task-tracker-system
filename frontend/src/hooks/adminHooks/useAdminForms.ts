import { Resolver } from "react-hook-form";

const useAdminForms = () => {
  const createRoleFormResolver: Resolver<CreateRoleFormValues> = (values) => {
    return {
      values: values?.roleName && values?.roleDescription ? values : {},
      errors: !values?.roleName
        ? {
            roleName: {
              type: "required",
              message: "Role name is required",
            },
          }
        : values?.roleName?.length < 3
        ? {
            roleName: {
              type: "minLength",
              message: "Role name must contain 3 letters at least.",
            },
          }
        : values?.roleName?.length > 30
        ? {
            roleName: {
              type: "maxLength",
              message: "Role name can not contain more than 30 letters.",
            },
          }
        : !values?.roleDescription
        ? {
            roleDescription: {
              type: "required",
              message: "Role description is required",
            },
          }
        : values?.roleDescription?.length < 10
        ? {
            roleName: {
              type: "minLength",
              message: "Role description must contain 10 letters at least.",
            },
          }
        : values?.roleDescription?.length > 300
        ? {
            roleName: {
              type: "maxLength",
              message:
                "Role description can not contain more than 300 letters.",
            },
          }
        : {},
    };
  };

  return { createRoleFormResolver };
};

export default useAdminForms;
