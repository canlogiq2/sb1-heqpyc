import React from 'react';
import { Key } from 'lucide-react';
import DashboardLayout from '../../components/DashboardLayout';

export default function ActivateLicense() {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Activate License</h1>

          <div className="mt-8 max-w-3xl">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Enter your license key
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    Your license key should have been sent to your email after purchase.
                  </p>
                </div>
                <form className="mt-5">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="license" className="sr-only">
                      License key
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Key className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="license"
                        id="license"
                        className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="XXXX-XXXX-XXXX-XXXX"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Activate License
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Having trouble?</h3>
              <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-4">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-sm font-medium text-gray-900">Where can I find my license key?</h5>
                        <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm text-gray-500">Your license key was sent to your email address after purchase. Check your inbox and spam folder. If you still can't find it, contact support.</p>
                    </details>

                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-sm font-medium text-gray-900">What if my license key isn't working?</h5>
                        <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm text-gray-500">Make sure you've entered the key correctly, including any hyphens. If it still doesn't work, ensure your license hasn't expired or reached its device limit.</p>
                    </details>

                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer">
                        <h5 className="text-sm font-medium text-gray-900">How many devices can I activate?</h5>
                        <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 text-sm text-gray-500">The number of devices depends on your license type. Standard licenses support up to 3 devices, while Pro licenses support up to 5 devices.</p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}