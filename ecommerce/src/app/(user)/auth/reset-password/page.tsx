"use client";

import Link from "next/link";
import { Formik, Form } from "formik";
import { AuthLayout } from "../components/layouts/layout";
import { FormInput } from "../components/ui/form-input";
import { resetPasswordSchema } from "../lib/validations/auth";
import type { ResetPasswordFormValues } from "../lib/types/auth";
import { toast } from "react-toastify";
import { resetService } from "../services/authService";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const initialValues: ResetPasswordFormValues = {
    newPassword: "",
  };

  const handleSubmit = async (values: ResetPasswordFormValues) => {
    try {
          const payload = {
            newPassword: values.newPassword,
          }
          const data = await resetService(payload, token?? "");
          toast.success(data.message || "Reset Successful");
          router.push("/auth/login");
        } catch (err) {
          console.error(err);
        } 
    };
  

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your new password"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8 space-y-6">
            <div className="space-y-4">
              <FormInput
                label="New Password"
                name="newPassword"
                type="password"
                placeholder="New Password"
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
