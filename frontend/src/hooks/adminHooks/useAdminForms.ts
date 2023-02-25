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
        : !values?.roleDescription
        ? {
            roleDescription: {
              type: "required",
              message: "Role description is required",
            },
          }
        : {},
    };
  };

  return { createRoleFormResolver };
};

export default useAdminForms;
