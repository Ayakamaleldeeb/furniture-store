import { useMutation, UseMutationOptions, MutateFunction } from "react-query";
import Axios from "@/helpers/Axios";

type ShippingAddress = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber?: string | null;
  deliveryInstructions?: string | null;
};

type CreateOrderData = {
  cartId: string;
  shippingAddress: ShippingAddress;
  deliveryMethodId?: string | null;
};

type OrderItem = {
  id: string;
  name: string | null;
  pictureUrl: string | null;
  price: number;
  quantity: number;
};

type DeliveryMethod = {
  id: string;
  name: string | null;
  description: string | null;
  cost: number;
};

type PaymentIntent = {
  clientSecret: string | null;
  paymentIntentId: string | null;
  success: boolean;
  publishableKey: string | null;
  message: string | null;
};

type Order = {
  id: string;
  userId: string | null;
  orderDate: string;
  status: string | null;
  paymentStatus: string | null;
  orderAmount: number;
  subtotal: number;
  deliveryFee: number;
  paymentIntentId: string | null;
  shippingAddress: ShippingAddress & { id: string };
  deliveryMethod: DeliveryMethod;
  orderItems: OrderItem[];
  paymentIntent: PaymentIntent;
};

type ResponseData = {
  order: Order;
};

const createOrder: MutateFunction<
  ResponseData,
  unknown,
  CreateOrderData
> = async (orderData: CreateOrderData) => {
  const { data }: { data: ResponseData } = await Axios.post(
    '/api/Order',
    orderData
  );
  if (!data) {
    throw Error("Error creating order");
  }
  return data;
};

const useCreateOrder = (
  options?: UseMutationOptions<ResponseData, Error, CreateOrderData>
) => {
  const data = useMutation(createOrder, {
    ...options,
  });
  return data;
};

export default useCreateOrder; 