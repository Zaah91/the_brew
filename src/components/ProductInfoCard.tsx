'use client';

import Image from 'next/image';
import { Data } from '@/utils/interfaces';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

export default function DrinkCard({ product }: { product: Data }) {
  const router = useRouter(); // Initialize the router
  // console.log('Product in DrinkCard:', product); // Log the product for debugging

  return (
    <div className="mt-4">
      <button
        className="w-60 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-900 active:bg-gray-800 transition-colors mb-2"
        onClick={() => router.back()}
      >
        Go back
      </button>

      <div className="flex gap-4 items-center justify-center text-center mt-16">
        <div className="flex-shrink-0">
          <Image
            src={product.image.url || '/duck.webp'}
            alt={product.name}
            width={200}
            height={200}
            className="w-80 h-80 object-cover rounded-md"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-2">{product.name}</h3>
          <p className="text-gray-100 mb-4 max-w-prose">{product.description}</p>
          <p className="text-base text-gray-200 mb-4">Category: {product.category.name}</p>
          <p className="text-base mb-4">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}