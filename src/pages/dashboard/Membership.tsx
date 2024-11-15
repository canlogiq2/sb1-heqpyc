import React from 'react';
import { CreditCard, Shield, Zap } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

export default function Membership() {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Membership</h1>

          {/* Current Plan */}
          <div className="mt-8 bg-white rounded-lg shadow">
            <div className="px-6 py-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">Current Plan</h2>
                  <p className="mt-1 text-sm text-gray-500">Pro Plan - Annual</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-500">Next billing date</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">March 15, 2025</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-500">Amount</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">$999/year</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-500">Payment method</p>
                  <div className="mt-2 flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                    <p className="text-lg font-medium text-gray-900">•••• 4242</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Upgrade Plan
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Update Payment Method
                </button>
              </div>
            </div>
          </div>

          {/* Plan Features */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">Plan Features</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Premium Support</p>
                  <p className="text-sm text-gray-500">24/7 priority support</p>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">API Access</p>
                  <p className="text-sm text-gray-500">Full API integration</p>
                </div>
              </div>

              <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Unlimited Usage</p>
                  <p className="text-sm text-gray-500">No usage restrictions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}