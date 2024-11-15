import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, Users, MessageCircle, Zap } from 'lucide-react';
import { products } from '../data/products';

const iconMap = {
  BarChart2: BarChart2,
  Users: Users,
  MessageCircle: MessageCircle,
};

export default function Products() {
  const navigate = useNavigate();

  return (
    <div id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the perfect solution for your social media needs</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = iconMap[product.icon as keyof typeof iconMap];
            return (
              <div
                key={product.id}
                className="relative group cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col hover:border-indigo-600 hover:shadow-lg transition">
                  <div className="flex items-center justify-between">
                    <Icon className="h-12 w-12 text-indigo-600" />
                    <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide bg-indigo-100 text-indigo-800">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{product.title}</h3>
                  <p className="mt-4 text-gray-600">{product.description}</p>
                  <ul className="mt-6 space-y-4 flex-1">
                    {product.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Zap className="h-5 w-5 text-indigo-500" />
                        <span className="ml-3 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}