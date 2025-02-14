"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormik } from "formik";
import { updatePasswordSchema } from "@/validations/auth-schema";
export function UpdatePassword(){
  const formik = useFormik({
    initialValues: {
      email: '',
      currentPassword: '',
      newPassword: '',
    },
    validationSchema: updatePasswordSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    
  })
        return (
          <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Change Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="justin@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>
    
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  value={formik.values.currentPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.currentPassword && formik.errors.currentPassword && (
                  <p className="text-red-500 text-sm">{formik.errors.currentPassword}</p>
                )}
              </div>
    
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.newPassword && formik.errors.newPassword && (
                  <p className="text-red-500 text-sm">{formik.errors.newPassword}</p>
                )}
              </div>
    
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 sm:w-auto">
                Change Password
              </Button>
            </form>
          </CardContent>
        </Card>
      );
    }
                  
             