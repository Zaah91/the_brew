'use client';

import { useShop } from '@/context/ShopContext';

export default function CheckoutPage() {
  const { cart, clearCart, removeFromCart } = useShop();
  const total = cart.reduce((sum, item) => sum + (parseFloat(item.price.toString()) || 0), 0);

  return (
    <div className="container-max px-4">
      <h1 className="heading-1 text-3xl text-center font-semibold mt-8 mb-4">
        Your Cart 
      </h1>

      {cart.length === 0 ? (
        <p className="text-center">... is unfortunately empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Cart items */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {cart.map((item, idx) => (
              <div key={idx} className="bg-[#2d2d2d] text-[#FAF0E6] rounded justify-between flex items-center gap-4 p-4">
                <span className="flex items-center gap-2">
                    <span className="flex-shrink-0">
                      <img
                      src={item.img || '/duck.webp'}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-30 h-30 object-cover rounded"
                    />
                    </span>
                    <div className="flex-1 flex flex-col gap-2">
                      <h4 className="text-lg font-semibold text-[#FAF0E6]">{item.name}</h4>
                      <p>Price: ${parseFloat(item.price?.toString() || '0').toFixed(2)}</p>
                    </div>                 
                </span>

                {/* Remove button - desktop */}
                <button
                  onClick={() => removeFromCart(idx)}
                  className="px-4 py-2 rounded-md btn btn-md btn-remove bg-gray-700 hover:bg-red-700 focus:outline-2 focus:outline-offset-2 focus:outline-red-900 active:bg-red-800 hidden md:block transition"
                >
                  Remove 
                </button>

                {/* Remove button - mobile */}
                <button
                  onClick={() => removeFromCart(idx)}
                  className="px-4 py-2 rounded-md btn btn-md btn-remove bg-gray-700 hover:bg-red-700 focus:outline-2 focus:outline-offset-2 focus:outline-red-900 active:bg-red-800 block md:hidden transition"
                >
                  Remove 
                </button>
              </div>
            ))}
          </div>

          {/* Right: Checkout summary */}
          <div className="bg-[#2d2d2d] text-[#FAF0E6] rounded p-4 h-fit sticky top-22">
            <h3 className="text-3xl font-semibold mb-4 text-[#FAF0E6]">Checkout</h3>
            <p className="mb-4 font-bold">Total: ${total.toFixed(2)}</p>
            <button 
              onClick={() => alert('Purchase complete!')} 
              className="btn px-4 py-2 mr-4 rounded-md btn-md bg-gray-700 hover:bg-green-800 focus:outline-2 focus:outline-offset-2 focus:outline-green-900 active:bg-green-900 transition"
            >
              Complete Purchase 
            </button>
            <button 
              onClick={clearCart} 
              className="px-4 py-2 rounded-md btn btn-md btn-remove bg-gray-700 hover:bg-red-700 focus:outline-2 focus:outline-offset-2 focus:outline-red-900 active:bg-red-800 transition"
            >
              Clear Cart 
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
