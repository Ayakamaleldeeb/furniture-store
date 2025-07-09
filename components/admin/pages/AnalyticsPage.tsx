"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign,
  Calendar,
  ArrowUpRight,
  // ArrowDownRight 
} from 'lucide-react';

const analyticsData = {
  revenue: {
    current: 284390,
    previous: 247820,
    change: 14.7
  },
  orders: {
    current: 5432,
    previous: 4821,
    change: 12.7
  },
  customers: {
    current: 18294,
    previous: 16982,
    change: 7.7
  },
  products: {
    current: 2847,
    previous: 2654,
    change: 7.3
  }
};

const monthlyData = [
  { month: 'Jan', revenue: 185000, orders: 3200 },
  { month: 'Feb', revenue: 220000, orders: 3800 },
  { month: 'Mar', revenue: 245000, orders: 4100 },
  { month: 'Apr', revenue: 265000, orders: 4500 },
  { month: 'May', revenue: 284390, orders: 5432 },
];

const topCategories = [
  { name: 'Furniture', sales: 1247, revenue: 189750 },
  { name: 'Lighting', sales: 892, revenue: 67840 },
  { name: 'Storage', sales: 634, revenue: 85960 },
  { name: 'Decor', sales: 421, revenue: 31575 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">
          Detailed insights and performance metrics for your store
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${analyticsData.revenue.current.toLocaleString()}</div>
            <div className="flex items-center space-x-1 text-xs">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{analyticsData.revenue.change}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.orders.current.toLocaleString()}</div>
            <div className="flex items-center space-x-1 text-xs">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{analyticsData.orders.change}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.customers.current.toLocaleString()}</div>
            <div className="flex items-center space-x-1 text-xs">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{analyticsData.customers.change}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.products.current.toLocaleString()}</div>
            <div className="flex items-center space-x-1 text-xs">
              <ArrowUpRight className="h-3 w-3 text-green-500" />
              <span className="text-green-500">+{analyticsData.products.change}%</span>
              <span className="text-muted-foreground">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
            <CardDescription>Revenue performance over the last 5 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 text-sm font-medium">{data.month}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(data.revenue / 300000) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">${data.revenue.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{data.orders} orders</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Top Categories</CardTitle>
            <CardDescription>Best performing product categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{category.name}</p>
                      <p className="text-xs text-muted-foreground">{category.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">${category.revenue.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">3.2%</div>
            <p className="text-sm text-muted-foreground">
              +0.4% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Avg Order Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">$52.40</div>
            <p className="text-sm text-muted-foreground">
              +$3.20 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Return Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-600">2.1%</div>
            <p className="text-sm text-muted-foreground">
              -0.3% from last month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}