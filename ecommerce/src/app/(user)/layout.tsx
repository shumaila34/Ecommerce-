// <<<<<<< HEAD
// import React from 'react';

// export default function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {children}
//     </div>
//   );
// }
// =======
import React from "react";
import { OrderProvider } from "./orders/context/OrderContext";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      
  <OrderProvider>{children}</OrderProvider>
      {/* <main>{children}</main>  */}
    </div>
  );
};

export default Layout;
