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
import { Loader } from "lucide-react";

// Define the initial form values
const initialValues: SignupFormValues = {
  name: "",
  email: "",
  password: "",
};

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = async (values: SignupFormValues, { resetForm }: { resetForm: () => void }) => {
    try {
      const data = await registerService(values);
      toast.success(data.message || "Signup successful");
      resetForm();
      router.push("/auth/login");
    } catch (err) {
      console.error(err);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Create an account by signing up with email and password"
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
                label="Full Name"
                name="name"
                type="text"
                placeholder="Full Name"
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader className="animate-spin" size={16} />
              ) : (
                "Register"
              )}
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
