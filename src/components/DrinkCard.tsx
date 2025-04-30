'use client';

import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import { Data } from '@/utils/interfaces';

export default function DrinkCard({ product }: { product: Data }) {
  const { addToCart } = useShop();
  // console.log('Product in DrinkCard:', product); // Log the product for debugging

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow items-center gap-4">
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <Image
        src={product.image.url || '/duck.webp'}
        alt={product.name}
        width={200}
        height={200}
        className="w-60 h-60 object-cover rounded-md"
      />
        {/* <p className="text-gray-700 mb-4">{product.description}</p> */}
        <p className="text-sm text-gray-500 mb-4">Category: {product.category.name}</p>
      
        <button className="w-60 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={() => addToCart({ id: product.id, name: product.name, price: product.price })}>
          Add to Cart (${product.price})
        </button>
      
    </div>
  );
}