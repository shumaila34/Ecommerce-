"use client";

import Link from "next/link";
import { Formik, Form, Field } from "formik";
import AuthLayout from "../components/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginSchema } from "../lib/validationSchemas";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const initialValues: LoginFormValues = { email: "", password: "" };

  return (
    <AuthLayout>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              // Handle login logic here
              actions.setSubmitting(false);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Field
                      name="email"
                      as={Input}
                      id="email"
                      placeholder="Enter your email"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Field
                      name="password"
                      as={Input}
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </div>
                </div>
                <Button
                  className="w-full mt-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex justify-between w-full text-sm">
            <Link
              href="/admin-login/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
            <Link
              href="/admin-login/create-account"
              className="text-blue-600 hover:underline"
            >
              Create account
            </Link>
          </div>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
