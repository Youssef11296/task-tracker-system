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
            roleDescription: {
              type: "minLength",
              message: "Role description must contain 10 letters at least.",
            },
          }
        : values?.roleDescription?.length > 300
        ? {
            roleDescription: {
              type: "maxLength",
              message:
                "Role description can not contain more than 300 letters.",
            },
          }
        : {},
    };
  };

  const createPackageFormResolver: Resolver<CreatePackageFormValues> = (
    values
  ) => {
    const { packageName, packageDescription, packagePrice } = values;
    return {
      values: packageName && packageDescription && packagePrice ? values : {},
      errors: !packageName
        ? {
            packageName: {
              type: "required",
              message: "Package name is required.",
            },
          }
        : packageName?.length < 3
        ? {
            packageName: {
              type: "minLength",
              message: "Package name must contain 3 letters at least.",
            },
          }
        : packageName?.length > 30
        ? {
            packageName: {
              type: "maxLength",
              message: "Package name can not contain more than 30 letters.",
            },
          }
        : !packageDescription
        ? {
            packageDescription: {
              type: "required",
              message: "Package description is required.",
            },
          }
        : packageDescription?.length < 10
        ? {
            packageDescription: {
              type: "minLength",
              message: "Package description must contain 10 letters at least.",
            },
          }
        : packageDescription?.length > 300
        ? {
            packageDescription: {
              type: "maxLength",
              message:
                "Package description can not contain more than 300 letters.",
            },
          }
        : !packagePrice
        ? {
            packagePrice: {
              type: "required",
              message: "Package price is required.",
            },
          }
        : packagePrice < 0
        ? {
            packagePrice: {
              type: "min",
              message: "Package price can not be less than 0.",
            },
          }
        : {},
    };
  };

  return { createRoleFormResolver, createPackageFormResolver };
};

export default useAdminForms;
