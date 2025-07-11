'use client';

import { Minus, Plus, X } from 'lucide-react';
// import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import useGetCart from '@/use-apis/cart/useGetCart';
import useRemoveCartItem from '@/use-apis/cart/useRemoveCartItem';
import useCreateOrder from '@/use-apis/order/useCreateOrder';

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ShippingAddressForm {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber?: string;
  deliveryInstructions?: string;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const [localCartItems, setLocalCartItems] = useState<any[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    // watch,
  } = useForm<ShippingAddressForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phoneNumber: '',
      deliveryInstructions: '',
    },
  });

  const {data,isLoading}=useGetCart({
    onSuccess(data) {
        console.log(data)
    },
    refetchOnMount: false,
    enabled:open,
    refetchOnWindowFocus: false,
  });

  const removeCartMutation = useRemoveCartItem({
    onSuccess: () => {
      queryClient.invalidateQueries(['Get-cart']);
    },
  });

  const createOrderMutation = useCreateOrder({
    onSuccess: (data) => {
      console.log('Order created:', data);
      setShowCheckout(false);
      reset();
      // Close cart or redirect to order confirmation
      onOpenChange(false);
    },
    onError: (error) => {
      console.error('Failed to create order:', error);
    },
  });

  // Update local cart items when data changes
  useEffect(() => {
    if (data?.items) {
      setLocalCartItems(data.items);
    }
  }, [data?.items]);

  const handleIncreaseQuantity = (furnitureId: string) => {
    setLocalCartItems(prevItems => 
      prevItems.map(item => 
        item.furnitureId === furnitureId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (furnitureId: string) => {
    const currentItem = localCartItems.find(item => item.furnitureId === furnitureId);
    
    if (currentItem && currentItem.quantity === 1) {
      // If this is the last item (quantity = 1), call the remove API
      removeCartMutation.mutate({ furnitureId });
    }
    
    // Update local state
    setLocalCartItems(prevItems => 
      prevItems.map(item => 
        item.furnitureId === furnitureId 
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      ).filter(item => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const handleRemoveItem = (furnitureId: string) => {
    // Call API to remove item
    removeCartMutation.mutate({ furnitureId });
    
    // Also update local state immediately for better UX
    setLocalCartItems(prevItems => 
      prevItems.filter(item => item.furnitureId !== furnitureId)
    );
  };

  const onSubmit = (formData: ShippingAddressForm) => {
    if (!data?.id) {
      console.error('No cart ID available');
      return;
    }

    const orderData = {
      cartId: data.id,
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        phoneNumber: formData.phoneNumber || null,
        deliveryInstructions: formData.deliveryInstructions || null,
      },
      deliveryMethodId: null, // You can add delivery method selection later
    };

    createOrderMutation.mutate(orderData);
  };
return (
  <Sheet open={open} onOpenChange={onOpenChange}>
    <SheetContent className="flex flex-col w-full bg-white sm:max-w-lg">
      <SheetHeader>
        <SheetTitle>{showCheckout ? 'Checkout' : 'Shopping Cart'}</SheetTitle>
      </SheetHeader>
      <div className="flex-grow overflow-auto py-4">
        {isLoading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : showCheckout ? (
          <form id="checkout-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  {...register('firstName', { required: 'First name is required' })}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register('lastName', { required: 'Last name is required' })}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="street">Street Address *</Label>
              <Input
                id="street"
                {...register('street', { required: 'Street address is required' })}
              />
              {errors.street && (
                <p className="text-sm text-red-500 mt-1">{errors.street.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  {...register('city', { required: 'City is required' })}
                />
                {errors.city && (
                  <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  {...register('state', { required: 'State is required' })}
                />
                {errors.state && (
                  <p className="text-sm text-red-500 mt-1">{errors.state.message}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  {...register('zipCode', { required: 'ZIP code is required' })}
                />
                {errors.zipCode && (
                  <p className="text-sm text-red-500 mt-1">{errors.zipCode.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  {...register('country', { required: 'Country is required' })}
                />
                {errors.country && (
                  <p className="text-sm text-red-500 mt-1">{errors.country.message}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                {...register('phoneNumber')}
              />
            </div>
            <div>
              <Label htmlFor="deliveryInstructions">Delivery Instructions</Label>
              <Textarea
                id="deliveryInstructions"
                {...register('deliveryInstructions')}
                placeholder="Any special delivery instructions..."
              />
            </div>
          </form>
        ) : localCartItems.length === 0 ? (
          <p className="text-center text-muted-foreground">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {localCartItems.map((item:any) => (
              <div
                key={item.furnitureId}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <div className="relative h-20 w-20 flex-shrink-0">
                  <img
                    src={item.pictureUrl || ''}
                    alt={item.name || 'Product Image'}
                    
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleDecreaseQuantity(item.furnitureId)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleIncreaseQuantity(item.furnitureId)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleRemoveItem(item.furnitureId)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      {localCartItems.length > 0 && !isLoading && (
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-medium">
              ${localCartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
            </span>
          </div>
          {showCheckout ? (
            <div className="space-y-2">
              <Button 
                type="submit"
                form="checkout-form"
                className="w-full" 
                disabled={isSubmitting || createOrderMutation.isLoading}
              >
                {isSubmitting || createOrderMutation.isLoading ? 'Creating Order...' : 'Place Order'}
              </Button>
              <Button 
                type="button"
                variant="outline" 
                className="w-full"
                onClick={() => setShowCheckout(false)}
              >
                Back to Cart
              </Button>
            </div>
          ) : (
            <Button 
              type="button"
              className="w-full"
              onClick={() => setShowCheckout(true)}
            >
              Checkout
            </Button>
          )}
        </div>
      )}
    </SheetContent>
  </Sheet>
);
}