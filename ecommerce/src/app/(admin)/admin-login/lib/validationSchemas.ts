import * as yup from "yup"

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
})

export const forgotPasswordSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
})

export const createAccountSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  role: yup.string().oneOf(["admin", "manager", "staff"], "Invalid role").required("Role is required"),
})

