import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { AppDownload } from "@/components/shared/AppDownload";

export const metadata: Metadata = {
  title: "Organic Store - Fresh & Healthy Products",
  description:
    "Your one-stop shop for organic products, fresh vegetables, fruits, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <AppDownload />
          <Footer />
        </div>
      </body>
    </html>
  );
}
