"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Eye, Edit, Package } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  products: string[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  shippingAddress: string;
}

const initialOrders: Order[] = [
  {
    id: 'ORD-3021',
    customer: 'John Doe',
    email: 'john.doe@example.com',
    products: ['Modern Desk Chair', 'Office Lamp'],
    total: 388,
    status: 'delivered',
    orderDate: '2024-01-20',
    shippingAddress: '123 Main St, New York, NY 10001'
  },
  {
    id: 'ORD-3022',
    customer: 'Jane Smith',
    email: 'jane.smith@example.com',
    products: ['Standing Desk'],
    total: 599,
    status: 'processing',
    orderDate: '2024-01-19',
    shippingAddress: '456 Oak Ave, Los Angeles, CA 90210'
  },
  {
    id: 'ORD-3023',
    customer: 'Mike Wilson',
    email: 'mike.wilson@example.com',
    products: ['Storage Cabinet', 'Office Lamp'],
    total: 538,
    status: 'shipped',
    orderDate: '2024-01-18',
    shippingAddress: '789 Pine St, Chicago, IL 60601'
  },
  {
    id: 'ORD-3024',
    customer: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    products: ['Modern Desk Chair', 'Standing Desk'],
    total: 898,
    status: 'pending',
    orderDate: '2024-01-17',
    shippingAddress: '321 Elm St, Houston, TX 77001'
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        <p className="text-muted-foreground">
          Manage customer orders and track shipments
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <CardDescription>
                    {order.customer} • {order.email}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusBadgeColor(order.status)}>
                    {order.status}
                  </Badge>
                  <span className="text-lg font-bold text-green-600">
                    ${order.total}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium mb-2">Products</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {order.products.map((product, index) => (
                      <li key={index} className="flex items-center">
                        <Package className="h-3 w-3 mr-2" />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Shipping Details</h4>
                  <p className="text-sm text-muted-foreground">{order.shippingAddress}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ordered: {order.orderDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <Select
                    value={order.status}
                    onValueChange={(value) => updateOrderStatus(order.id, value as Order['status'])}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No orders found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}