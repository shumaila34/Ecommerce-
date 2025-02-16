"use client";

import Link from "next/link";
import { Formik, Form } from "formik";
import { AuthLayout } from "../components/layouts/layout";
import { FormInput } from "../components/ui/form-input";
import { signupSchema } from "../lib/validations/auth";
import type { SignupFormValues } from "../lib/types/auth";
import { registerService } from "../services/authService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const initialValues: SignupFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  const handleSubmit = async (values: SignupFormValues, { resetForm }: { resetForm: () => void }) => {
 
    try {
      const payload = {
        FirstName: values.firstName,
        LastName: values.lastName,
        Email: values.email,
        Password: values.password,
        PhoneNumber: values.phoneNumber,
      };
      const data = await registerService(payload);
      toast.success(data.message || "Signup successful");
      resetForm(); 
      router.push("/auth/login");
    } catch (err) {
      console.error(err);
    } 
  };

  return (
    <AuthLayout
      title="Signing Up"
      subtitle="Create an account by sign up with email, password"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-6">
            <div className="space-y-4">
              <FormInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <FormInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <FormInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating account..." : "Register"}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Login
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
}
