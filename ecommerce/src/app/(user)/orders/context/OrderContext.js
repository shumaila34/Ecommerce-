"use client";
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../services/OrderService";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { data: orders = [], isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  return (
    <OrderContext.Provider value={{ orders, isLoading, error }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);
