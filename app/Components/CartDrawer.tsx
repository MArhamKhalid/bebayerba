'use client'
import React, { useEffect } from 'react'

interface CartItem {
  id: string
  name: string
  flavor: string
  price: number
  quantity: number
  image: string
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items?: CartItem[]
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items = [] }) => {
  const dummyItems: CartItem[] = [
    { id: '1', name: 'MATE+ Citrus Boost', flavor: '12-Pack (355ml)', price: 36.00, quantity: 1, image: '/image/orange-can.png' },
    { id: '2', name: 'MATE+ Berry Focus', flavor: '12-Pack (355ml)', price: 36.00, quantity: 2, image: '/image/orange-can.png' }
  ]

  const cartList = items.length > 0 ? items : dummyItems
  const subtotal = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0)

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div 
      className={`fixed inset-0 z-80 overflow-hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* 1. Backdrop Overlay (Sirf Opacity Fade Karega) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* 2. Sliding Panel Container */}
      <div className='fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none'>
        
        {/* Hardware Accelerated Sliding Box */}
        <div 
          className={`w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-gray-900 pointer-events-auto transform transition-transform duration-500 ease-out will-change-transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          
          {/* Header */}
          <div className='p-6 bg-[#0A3B21] text-white flex items-center justify-between border-b border-[#00692D]'>
            <div className='flex items-center gap-3'>
              <h2 className='font-Argot text-2xl uppercase font-bold tracking-wide'>Your Cart</h2>
              <span className='bg-[#FFD815] text-[#0A3B21] text-xs font-bold px-2.5 py-0.5 rounded-full'>
                {cartList.reduce((acc, item) => acc + item.quantity, 0)} Items
              </span>
            </div>
            <button 
              onClick={onClose}
              className='p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white'
              aria-label="Close cart"
            >
              ✕
            </button>
          </div>

          {/* Cart Item List */}
          <div className='flex-1 overflow-y-auto p-6 space-y-6'>
            {cartList.map((item) => (
              <div key={item.id} className='flex items-center gap-4 pb-6 border-b border-gray-100 last:border-0'>
                <div className='w-20 h-20 bg-gray-50 rounded-2xl p-2 border border-gray-100 flex items-center justify-center flex-shrink-0'>
                  <img src={item.image} alt={item.name} className='h-full object-contain drop-shadow-md' />
                </div>
                
                <div className='flex-1'>
                  <h3 className='font-Argot font-bold text-base text-[#0A3B21] uppercase leading-tight'>{item.name}</h3>
                  <p className='font-Aeonik text-xs text-gray-500 mt-0.5'>{item.flavor}</p>
                  <p className='font-Aeonik font-bold text-[#E86000] text-sm mt-1'>${item.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className='flex items-center gap-3 mt-3'>
                    <div className='flex items-center border border-gray-200 rounded-full px-3 py-1 gap-3 bg-gray-50'>
                      <button className='text-gray-500 hover:text-black font-bold text-sm'>-</button>
                      <span className='font-Aeonik text-xs font-bold'>{item.quantity}</span>
                      <button className='text-gray-500 hover:text-black font-bold text-sm'>+</button>
                    </div>
                    <button className='text-xs font-Aeonik text-red-500 hover:underline'>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Subtotal & Checkout */}
          <div className='p-6 bg-gray-50 border-t border-gray-200 space-y-4'>
            <div className='flex justify-between items-center text-sm font-Aeonik text-gray-600'>
              <span>Subtotal</span>
              <span className='font-bold text-lg text-[#0A3B21]'>${subtotal.toFixed(2)}</span>
            </div>
            <p className='text-xs font-Aeonik text-gray-500'>Taxes and shipping calculated at checkout.</p>

            <button className='w-full bg-[#E86000] hover:bg-[#c45100] text-white font-Aeonik font-bold py-4 rounded-full uppercase tracking-wider text-sm transition-all shadow-lg hover:shadow-xl'>
              Proceed to Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartDrawer