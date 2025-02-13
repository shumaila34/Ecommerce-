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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createAccountSchema } from "../lib/validationSchemas";

interface CreateAccountFormValues {
  name: string;
  email: string;
  password: string;
  role: string;
}

export default function CreateAccountPage() {
  const initialValues: CreateAccountFormValues = {
    name: "",
    email: "",
    password: "",
    role: "",
  };

  return (
    <AuthLayout>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={createAccountSchema}
            onSubmit={(values, actions) => {
              console.log(values);
              // Handle account creation logic here
              actions.setSubmitting(false);
            }}
          >
            {({ errors, touched, isSubmitting, setFieldValue }) => (
              <Form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Field
                      name="name"
                      as={Input}
                      id="name"
                      placeholder="Enter your name"
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Field
                      name="email"
                      as={Input}
                      id="email"
                      type="email"
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
                      placeholder="Create a password"
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="role">Staff Role</Label>
                    <Select
                      onValueChange={(value) => setFieldValue("role", value)}
                    >
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.role && touched.role && (
                      <p className="text-red-500 text-sm">{errors.role}</p>
                    )}
                  </div>
                </div>
                <Button
                  className="w-full mt-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex justify-center w-full text-sm">
            <Link href="/admin-login/login" className="text-blue-600 hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
