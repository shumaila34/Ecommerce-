"use client"

import { useFormik } from "formik"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { checkoutSchema } from "@/validations/checkout-schema"

export function CheckoutForm() {
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      country: "",
      zipCode: "",
      paymentMethod: "",
      shippingOption: "",
    },
    validationSchema: checkoutSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <Card>
    <CardHeader>
      <CardTitle className="text-xl sm:text-2xl">Checkout</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              {...formik.getFieldProps("firstName")}
              className={formik.touched.firstName && formik.errors.firstName ? "border-red-500" : ""}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-sm text-red-500">{formik.errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              {...formik.getFieldProps("lastName")}
              className={formik.touched.lastName && formik.errors.lastName ? "border-red-500" : ""}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-sm text-red-500">{formik.errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
            className={formik.touched.email && formik.errors.email ? "border-red-500" : ""}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500">{formik.errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            {...formik.getFieldProps("address")}
            className={formik.touched.address && formik.errors.address ? "border-red-500" : ""}
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-sm text-red-500">{formik.errors.address}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              {...formik.getFieldProps("city")}
              className={formik.touched.city && formik.errors.city ? "border-red-500" : ""}
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-sm text-red-500">{formik.errors.city}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="zipCode">Postal Code</Label>
            <Input
              id="zipCode"
              {...formik.getFieldProps("zipCode")}
              className={formik.touched.zipCode && formik.errors.zipCode ? "border-red-500" : ""}
            />
            {formik.touched.zipCode && formik.errors.zipCode && (
              <p className="text-sm text-red-500">{formik.errors.zipCode}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              {...formik.getFieldProps("country")}
              className={formik.touched.country && formik.errors.country ? "border-red-500" : ""}
            />
            {formik.touched.country && formik.errors.country && (
              <p className="text-sm text-red-500">{formik.errors.country}</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Shipping Cost</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <RadioGroup
                name="shippingOption"
                value={formik.values.shippingOption}
                onValueChange={(value) => {
                  formik.setFieldValue("shippingOption", value)
                  formik.setFieldTouched("shippingOption", true)
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard Shipping - $5</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express">Express Shipping - $10</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {formik.touched.shippingOption && formik.errors.shippingOption ? (
            <div className="text-red-500 mt-2">{formik.errors.shippingOption}</div>
          ) : null}
        </div>

        <div>
          <h3 className="text-lg font-medium">Payment Method</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <RadioGroup
                name="paymentMethod"
                value={formik.values.paymentMethod}
                onValueChange={(value) => {
                  formik.setFieldValue("paymentMethod", value)
                  formik.setFieldTouched("paymentMethod", true)
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card">Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
            <div className="text-red-500 mt-2">{formik.errors.paymentMethod}</div>
          ) : null}
        </div>

        <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
          Place Order
        </Button>
      </form>
    </CardContent>
  </Card>
)
}
