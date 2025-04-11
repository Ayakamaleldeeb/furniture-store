'use client';

import { Minus, Plus, X } from 'lucide-react';
// import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import useGetCart from '@/use-apis/cart/useGetCart';

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {

const {data,isLoading}=useGetCart({
  onSuccess(data) {
      console.log(data)
  },
  refetchOnMount: false,
  enabled:open,
  refetchOnWindowFocus: false,
});
return (
  <Sheet open={open} onOpenChange={onOpenChange}>
    <SheetContent className="flex flex-col w-full bg-white sm:max-w-lg">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
      </SheetHeader>
      <div className="flex-grow overflow-auto py-4">
        {isLoading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : data?.items.length === 0 ? (
          <p className="text-center text-muted-foreground">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {data?.items.map((item:any) => (
              <div
                key={item.furnitureId}
                className="flex items-center space-x-4 border-b pb-4"
              >
                <div className="relative h-20 w-20 flex-shrink-0">
                  {/* <Image
                    src={item.pictureUrl || ''}
                    alt={item.name || 'Product Image'}
                    fill
                    className="object-cover rounded"
                  /> */}
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
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      {data?.items.length > 0 && !isLoading && (
        <div className="border-t pt-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      )}
    </SheetContent>
  </Sheet>
);
}