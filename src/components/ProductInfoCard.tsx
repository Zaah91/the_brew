'use client';

import Image from 'next/image';
import { Data } from '@/utils/interfaces';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

export default function DrinkCard({ product }: { product: Data }) {
  const router = useRouter(); // Initialize the router
  // console.log('Product in DrinkCard:', product); // Log the product for debugging

  return (
    <div className="p-4 shadow-md hover:shadow-lg transition-shadow">
      <button
        className="w-60 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mb-4 cursor-pointer"
        onClick={() => router.back()}
      >
        Go back
      </button>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Image
            src={product.image.url || '/duck.webp'}
            alt={product.name}
            width={200}
            height={200}
            className="w-60 h-60 object-cover rounded-md"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4">Category: {product.category.name}</p>
          <p className="text-sm text-gray-500 mb-4">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}