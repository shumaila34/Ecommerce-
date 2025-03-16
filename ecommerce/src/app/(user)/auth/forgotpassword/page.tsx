"use client";

import Link from "next/link";
import { Formik, Form } from "formik";
import { AuthLayout } from "../components/layouts/layout";
import { FormInput } from "../components/ui/form-input";
import { forgotPasswordSchema } from "../lib/validations/auth";
import type { ForgotPasswordFormValues } from "../lib/types/auth";
import { toast } from "react-toastify";
import { forgotService } from "../services/authService";
import { Loader } from "lucide-react";

export default function ForgotPasswordPage() {
  const initialValues: ForgotPasswordFormValues = {
    email: "",
  };

  const handleSubmit = async (values: ForgotPasswordFormValues) => {
    try {
          const data = await forgotService(values);
          toast.success(data.message || "Check Your Email Address For Reset Password!");
        } catch (err) {
          console.error(err);
        } 
    };
  

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email to reset your password"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={forgotPasswordSchema}
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
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader className="animate-spin" size={16} />
              ) : (
                "Reset Password"
              )}
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
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
