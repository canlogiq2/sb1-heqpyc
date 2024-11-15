import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Features />
      <Testimonials />
    </>
  );
}