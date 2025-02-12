import { UpdatePassword } from "./components/update-password";

export default function UpdatePasswordPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl text-center md:text-left">
        Change Password
      </h1>
      <UpdatePassword />
    </div>
  )
}