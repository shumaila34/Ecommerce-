"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { AuthLayout } from "../components/layouts/layout";
import { CheckCircle, Loader } from "lucide-react";
import { verifyEmail } from "../services/authService";
import { toast } from "react-toastify";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing verification token.");
      router.push("/auth/register"); 
      return;
    }

    const verifyUserEmail = async () => {
      try {
        await verifyEmail(token);
        setIsVerified(true);
        toast.success("Email verified successfully!");
      } catch (error) {
        router.push("/auth/register");
      } finally {
        setLoading(false);
      }
    };

    verifyUserEmail();
  }, [token]);

  return (
    <AuthLayout title="Email Verification" subtitle="Please wait while we verify your email">
      <div className="mt-8 space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Loader className="h-12 w-12 text-emerald-600 animate-spin" />
            <p className="text-center text-gray-500">Verifying your email...</p>
          </div>
        ) : isVerified ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-emerald-100 p-3">
              <CheckCircle className="h-12 w-12 text-emerald-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-900">Email verified successfully</h3>
            <p className="text-center text-gray-500">
              Thank you for verifying your email address. Your account is now fully activated.
            </p>

            <button
              onClick={() => router.push("/auth/login")}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Continue to Login
            </button>
          </div>
        ) : (
          <p className="text-center text-red-500">Email verification failed. Please try again.</p>
        )}

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <Link href="/contact" className="font-medium text-emerald-600 hover:text-emerald-500">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
