import * as Yup from "yup"

export const loginSchema = Yup.object().shape({
  Email: Yup.string().email("Invalid email address").required("Email is required"),
  Password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
})

export const signupSchema = Yup.object().shape({
  FirstName: Yup.string().min(2, "Name must be at least 2 characters").required("First name is required"),
  LastName: Yup.string().min(2, "Name must be at least 2 characters").required("Last name is required"),
  Email: Yup.string().email("Invalid email address").required("Email is required"),
  Password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    )
    .required("Password is required"),
  PhoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Invalid phone number format")
    .required("Phone number is required"),
})

export const forgotPasswordSchema = Yup.object().shape({
  Email: Yup.string().email("Invalid email address").required("Email is required"),
})

export const resetPasswordSchema = Yup.object().shape({
  Password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    )
    .required("Password is required"),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref("Password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
})

