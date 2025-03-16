"use client";
// import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { AppDownload } from "@/components/shared/AppDownload";
import { Providers } from "@/providers/Providers";


// export const metadata: Metadata = {
//   title: "Organic Store - Fresh & Healthy Products",
//   description:
//     "Your one-stop shop for organic products, fresh vegetables, fruits, and more.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isAdminPanel = pathname.startsWith("/admin-panel") ||pathname.startsWith("/admin-login"); // Check if it's the admin route

  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-right" autoClose={3000} />
        <Providers>
        <div className="flex flex-col min-h-screen">
          {!isAdminPanel && <Header />}
          <main className="flex-grow">{children}</main>
          {!isAdminPanel && <AppDownload />}
          {!isAdminPanel && <Footer />}
        </div>
        </Providers>
      </body>
    </html>
  );
}
