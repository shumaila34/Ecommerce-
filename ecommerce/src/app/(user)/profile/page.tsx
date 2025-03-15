"use client"

import { useState, useEffect } from "react"
import { UpdateProfile } from "./components/update-profile"
import { UpdateProfileSkeleton } from "./components/update-profile-skeleton"

export default function UpdateProfilePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl text-center md:text-left">
        Update Profile
      </h1>
      {isLoading ? <UpdateProfileSkeleton /> : <UpdateProfile />}
    </div>
  )
}