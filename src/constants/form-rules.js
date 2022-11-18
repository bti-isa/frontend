import ValidationPatterns from "./validation-patterns";

const FormRules = {
  name: {
    required: { value: true, message: "Required" },
    pattern: {
      value: ValidationPatterns.NAME,
      message: "Please enter valid name.",
    },
  },
  email: {
    required: { value: true, message: "Required" },
    pattern: {
      value: ValidationPatterns.EMAIL,
      message: "Please enter valid email",
    },
  },
  password: {
    required: { value: true, message: "Required" },
    pattern: {
      value: ValidationPatterns.PASSWORD,
      message: "Please enter valid password.",
    },
  },
  phone: {
    required: {
      value: true,
      message: "Required",
    },
    pattern: {
      value: ValidationPatterns.PHONE,
      message: "Please enter valid phone number.",
    },
  },
};

export default FormRules;
