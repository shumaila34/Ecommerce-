import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    paymentMethod: Yup.string().required("Payment Method is required"),
    shippingOption: Yup.string().required("Shipping option is required")
})