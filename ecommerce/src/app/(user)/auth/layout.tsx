import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <ToastContainer position="top-right" autoClose={3000} />
        <body>{children}</body>
      </html>
    );
  }