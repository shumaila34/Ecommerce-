export interface OrderStatusProps {
    status: string
}
 export type Order = {
    id: string;
    orderTime: string;
    method: string;
    status: string;
    total: number;
  };