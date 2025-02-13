"use client"

import { useState, useEffect } from "react"
import { UpdatePassword } from "./components/update-password"
import { UpdatePasswordSkeleton } from "./components/update-password-skeleton"

export default function UpdatePasswordPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl text-center md:text-left">
        Change Password
      </h1>
      {isLoading ? <UpdatePasswordSkeleton /> : <UpdatePassword />}
    </div>
  )
}

