'use client';

import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import { Data } from '@/utils/interfaces';

export default function DrinkCard({ product }: { product: Data }) {
  const { addToCart } = useShop();
  console.log('Product in DrinkCard:', product); // Log the product for debugging

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-bold">{product.productName}</h3>
      <Image
        src= {product.productImage.imgUrl || '/duck.webp'}
        alt={product.productName}
        width={200}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={() => addToCart({ id: product.productId, name: product.productName, price: product.productPrice })} // Add item to cart>
        >
        Add to Cart ($ {product.productPrice})
      </button>
    </div>
  );
}