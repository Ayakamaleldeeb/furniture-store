"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  // Menu,
  X,
  // Home
} from 'lucide-react';

// Import all admin components
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsPage';
import UsersPage from './pages/UsersPage';
import OrdersPage from './pages/OrdersPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';

const navigation = [
  { name: 'Dashboard', id: 'dashboard', icon: LayoutDashboard },
  { name: 'Products', id: 'products', icon: Package },
  { name: 'Users', id: 'users', icon: Users },
  { name: 'Orders', id: 'orders', icon: ShoppingCart },
  { name: 'Analytics', id: 'analytics', icon: BarChart3 },
  { name: 'Settings', id: 'settings', icon: Settings },
];

interface AdminDashboardProps {
  onClose?: () => void;
}

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'products':
        return <ProductsPage />;
      case 'users':
        return <UsersPage />;
      case 'orders':
        return <OrdersPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0 bg-white shadow-lg hidden lg:flex flex-col">
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "flex items-center w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    activeTab === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {onClose && (
          <div className="p-4 border-t">
            <Button variant="outline" onClick={onClose} className="w-full">
              Back to Website
            </Button>
          </div>
        )}
      </div>
  
      {/* Mobile sidebar (drawer style) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={cn(
                        "flex items-center w-full px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        activeTab === item.id
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      )}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {onClose && (
              <div className="p-4 border-t">
                <Button variant="outline" onClick={onClose} className="w-full">
                  Back to Website
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
  
      {/* Main content */}
      <div className="flex-1">
        <main className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}