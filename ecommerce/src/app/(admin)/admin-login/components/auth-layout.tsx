import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600">DAX Bazar</h1>
        <p className="text-gray-600">Dashboard Login</p>
      </header>
      <main className="w-full max-w-md">{children}</main>
    </div>
  );
}
