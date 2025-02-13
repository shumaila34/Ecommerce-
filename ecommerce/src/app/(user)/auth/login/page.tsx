"use client";

import Link from "next/link";
import { Formik, Form } from "formik";
import { AuthLayout } from "../components/layouts/layout";
import { FormInput } from "../components/ui/form-input";
import { loginSchema } from "../lib/validations/auth";
import type { LoginFormValues } from "../lib/types/auth";

export default function LoginPage() {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginFormValues) => {
    // Add your login logic here
    console.log("Login attempt:", values);
  };

  return (
    <AuthLayout title="Login" subtitle="Login with your email and password">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-6">
            <div className="space-y-4">
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
            </div>

            <div className="flex items-center justify-end">
              <Link
                href="/auth/forgotpassword"
                className="text-sm text-emerald-600 hover:text-emerald-500"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {"Don't have an account? "}
                <Link
                  href="/auth/register"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
}
