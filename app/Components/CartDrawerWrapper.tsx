'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import CartDrawer from '../Components/CartDrawer';

export default function CartDrawerWrapper() {
  const { isCartOpen, closeCart } = useCart();
  return <CartDrawer isOpen={isCartOpen} onClose={closeCart} />;
}