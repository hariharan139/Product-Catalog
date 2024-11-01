// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/Productpage';

const App = () => {
  const products = [
    {
      id: 1,
      name: ' Nikon Camera',
      category: 'Electronics',
      description: 'Capture stunning photos and videos.',
      price: 300,
      image: 'images/cam1.jpeg',
      specifications: {
        brand: 'Canon',
        resolution: '20MP',
        zoom: '10x optical',
        weight: '500g',
      },
    },
    {
      id: 2,
      name: ' DSLR Camera',
      category: 'Electronics',
      description: 'Capture stunning photos and videos.',
      price: 300,
      image: 'images/cam2.jpeg',
      specifications: {
        brand: 'Canon',
        resolution: '20MP',
        zoom: '10x optical',
        weight: '500g',
      },
    },
    {
      id: 3,
      name: 'Camera',
      category: 'Electronics',
      description: 'Capture stunning photos and videos.',
      price: 300,
      image: 'images/cam3.jpeg',
      specifications: {
        brand: 'Canon',
        resolution: '20MP',
        zoom: '10x optical',
        weight: '500g',
      },
    },
    {
      id: 4,
      name: ' DSLR Camera',
      category: 'Electronics',
      description: 'Capture stunning photos and videos.',
      price: 300,
      image: 'images/cam4.jpeg',
      specifications: {
        brand: 'Canon',
        resolution: '20MP',
        zoom: '10x optical',
        weight: '500g',
      },
    },
    {
      id: 5,
      name: 'Tent',
      category: 'Outdoors',
      description: 'Perfect for outdoor camping.',
      price: 100,
      image: 'images/tent.jpeg',
      specifications: {
        material: 'Polyester',
        capacity: '2 persons',
        weight: '2kg',
        waterproof: 'Yes',
      },
    },
    {
      id: 6,
      name: 'jackets',
      category: 'Outdoors',
      description: 'Perfect for outdoor camping.',
      price: 300,
      image: 'images/jackets.jpeg',
      specifications: {
        material: 'Polyester',
        capacity: '3',
        weight: '1kg',
        waterproof: 'Yes',
      },
    },
    {
      id: 7,
      name: 'Hoodie',
      category: 'Outdoors',
      description: 'Perfect for outdoor camping.',
      price: 100,
      image: 'images/hoodie.jpeg',
      specifications: {
        material: 'Wool',
        capacity: '1',
        weight: '1kg',
        waterproof: 'Yes',
      },
    },
    {
      id: 8,
      name: 'Camping Kit',
      category: 'Outdoors',
      description: 'Perfect for outdoor camping.',
      price: 1000,
      image: 'images/camp.jpeg',
      specifications: {
        material: 'Shoes,backpack,gear',
        capacity: '1',
        weight: '2kg',
        waterproof: 'Yes',
      },
    },
    // Add more products here with similar structure
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/product/:id" element={<ProductPage products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
