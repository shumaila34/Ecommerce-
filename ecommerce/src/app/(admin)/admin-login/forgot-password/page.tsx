"use client"

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
import { forgotPasswordSchema } from "../lib/validationSchemas";

interface ForgotPasswordFormValues {
    email: string;
}

export default function ForgotPasswordPage() {
    const initialValues: ForgotPasswordFormValues = { email: "" };

    return(
        <AuthLayout>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center">Forgot Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <Formik
                    initialValues={initialValues}
                    validationSchema={forgotPasswordSchema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        //add logic here
                        actions.setSubmitting(false);
                    }}
                    >
                        {({ errors, touched, isSubmitting}) => (
                            <Form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Field name="email" as={Input} id="email"
                                        placeholder="Enter your email" />
                                        {errors.email && touched.email && <p
                                        className="text-red-500 text-sm">{errors.email}</p>}
                                    </div>
                                </div>
                                <Button className="w-full mt-4" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Resetting..." : "Reset Password"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="flex justify-center w-full text-sm">
                        <Link href="/admin-login/login" className="text-blue-600 hover:Underline">Back to Login</Link>
                    </div>
                </CardFooter>
            </Card>
        </AuthLayout>
    )
}