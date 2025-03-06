"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormik } from "formik";
import { profileUpdateSchema } from "@/validations/auth-schema";

export function UpdateProfile(){
  const formik =useFormik({
    initialValues: {
      fullName: '',
      address: '',
      phone: '',
      email: ''
    },
    validationSchema: profileUpdateSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })
        return (
          <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Update Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Justin J. Ruiz"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
                )}
              </div>
    
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-sm">{formik.errors.address}</p>
                )}
              </div>
    
              <div className="space-y-2">
                <Label htmlFor="phone">Phone/Mobile</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="212-512-2888"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>
    
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
    
              <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 sm:w-auto">
                Update Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      );
    }
