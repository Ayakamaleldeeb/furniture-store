"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight 
} from 'lucide-react';

const stats = [
  {
    title: 'Total Products',
    value: '2,847',
    change: '+12%',
    changeType: 'positive',
    icon: Package,
    description: 'Products in inventory'
  },
  {
    title: 'Active Users',
    value: '18,294',
    change: '+8%',
    changeType: 'positive',
    icon: Users,
    description: 'Registered customers'
  },
  {
    title: 'Total Orders',
    value: '5,432',
    change: '+23%',
    changeType: 'positive',
    icon: ShoppingCart,
    description: 'Orders this month'
  },
  {
    title: 'Revenue',
    value: '$284,390',
    change: '+15%',
    changeType: 'positive',
    icon: DollarSign,
    description: 'Monthly revenue'
  },
];

const recentOrders = [
  { id: '#3021', customer: 'John Doe', product: 'Modern Desk Chair', amount: '$299', status: 'completed' },
  { id: '#3022', customer: 'Jane Smith', product: 'Standing Desk', amount: '$599', status: 'processing' },
  { id: '#3023', customer: 'Mike Wilson', product: 'Office Lamp', amount: '$89', status: 'shipped' },
  { id: '#3024', customer: 'Sarah Johnson', product: 'Storage Cabinet', amount: '$449', status: 'completed' },
  { id: '#3025', customer: 'David Brown', product: 'Ergonomic Chair', amount: '$399', status: 'processing' },
];

const topProducts = [
  { name: 'Modern Desk Chair', sales: 247, revenue: '$73,853' },
  { name: 'Standing Desk', sales: 189, revenue: '$113,211' },
  { name: 'Office Lamp', sales: 156, revenue: '$13,884' },
  { name: 'Storage Cabinet', sales: 134, revenue: '$60,166' },
  { name: 'Ergonomic Chair', sales: 121, revenue: '$48,279' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Welcome back!
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                {stat.changeType === 'positive' ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}>
                  {stat.change}
                </span>
                <span>from last month</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.product}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium">{order.amount}</p>
                    <div className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      order.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best selling products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{product.revenue}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <Package className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Add New Product</p>
                <p className="text-xs text-muted-foreground">Create a new product listing</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <Users className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium">Manage Users</p>
                <p className="text-xs text-muted-foreground">View and edit user accounts</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-sm font-medium">View Analytics</p>
                <p className="text-xs text-muted-foreground">Check detailed reports</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}