'use client';

import { useShop } from '@/context/ShopContext';
import Image from 'next/image';
import Link from 'next/link';
import { Data } from '@/utils/interfaces';

export default function DrinkCard({ product }: { product: Data }) {
  const { addToCart } = useShop();
  // console.log('Product in DrinkCard:', product); // Log the product for debugging

  return (
    <div className="border rounded-lg p-4 bg-zinc-900 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-4">
      <Link href={`/shop/${product.id}`} passHref>
        <div className="flex flex-col items-center text-center cursor-pointer">
          <h3 className="font-bold text-lg mb-2">{product.name}</h3>
          <Image
            src={product.image.url || '/duck.webp'}
            alt={product.name}
            width={200}
            height={200}
            className="w-60 h-60 object-cover rounded-md"
          />
          <p className="text-sm text-gray-500 mt-2">Category: {product.category.name}</p>
          <button className="w-60 mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-900 active:bg-gray-800 transition-colors">
            Read more
          </button>
        </div>
      </Link>

      <button
        className="w-60 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 focus:outline-2 focus:outline-offset-2 focus:outline-gray-900 active:bg-gray-800 transition-colors mb-2"
        onClick={() =>
          addToCart({
            id: product.id,
            img: product.image.url,
            name: product.name,
            price: product.price,
          })
        }
      >
        Add to Cart (${product.price})
      </button>
    </div>

  );
}