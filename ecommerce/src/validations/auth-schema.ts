import * as Yup  from "yup"

export const profileUpdateSchema = Yup.object({
    fullName: Yup.string().required("Full name is required").min(2,"Name must be atleast 2 characters"),
    address: Yup.string().required("Address is required").min(5,"Address must be atleast 5 characters"),
    phone: Yup.string().required("Phone number is required").matches(/^[0-9]+$/,"phone number can only contain numbers and hyphens").min(10,"Phone number must be at least 10 digits"),
    email: Yup.string().email("Invalid email address").required("Email is required")
})

export const updatePasswordSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    currentPassword: Yup.string().required("Current password is required").min(8,"Password must be at least 8 characters"),
    newPassword: Yup.string().required("New Password is required").min(8,"Password must be at least 8 characters").notOneOf([Yup.ref("currentPassword")],"New password must be different from current password")
})