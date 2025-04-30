'use client';
import { useShop } from '@/context/ShopContext';

export default function CheckoutPage() {
  const { cart, clearCart, removeFromCart } = useShop(); 
  const total = cart.reduce((sum, item) => sum + (parseFloat(item.price.toString()) || 0), 0); // Calculate total price
  // parseFloat ensures that the price is a number, even if it's a string
  // toString() is used to convert the price to a string before parsing it

  console.log('Cart in CheckoutPage:', cart); // Log the cart for debugging
  console.log('Total in CheckoutPage:', total); // Log the total for debugging
  console.log('useShop context:', useShop());

  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        {cart.length === 0 ? ( // Check if cart array is empty
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item, idx) => (
                <li key={idx} className="border p-2 rounded flex justify-between items-center">
                  <span>{item.name} - ${item.price}</span>
                  <button
                    onClick={() => removeFromCart(idx)} // Remove item from cart
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total: ${total}</p>
            <button onClick={clearCart} className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
              Complete Purchase
            </button>
            <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 mt-4 rounded ml-2">
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}