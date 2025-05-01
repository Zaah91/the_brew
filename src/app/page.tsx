// 'use client'; // Needed for client components, in this case, to use API, it cant be a client component
import DrinkCard from '@/components/DrinkCard';
import { getCoffee } from '@/utils/api';
import { Data } from '@/utils/interfaces';


export default async function HomePage() {

  const products: Data[] = await getCoffee(); // Assuming getCoffee fetches all products
  const latestProducts = products.sort((a, b) => Number(b.id) - Number(a.id)).slice(0, 3);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to The Brew</h1>
        <p className="text-lg mt-2">We got the coffee, or the tea, for any taste.</p>
        <p className="text-lg mt-2">So treat yourself, with some good brew.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestProducts.map((product) => (
          <DrinkCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}