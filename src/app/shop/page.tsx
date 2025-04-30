import DrinkCard from '@/components/DrinkCard';
import { getCoffee } from '@/utils/api';
import { Data } from '@/utils/interfaces';

export default async function ShopPage() {
  const data:Data[] = await getCoffee();
  // console.log('Data in ShopPage:', data); // Log array of objects for debugging

  return (
    <div>
      <div className="min-h-screen p-8 pb-20 sm:p-20">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Dream selection of coffee and tea</h1>
        </header>
         
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          {data.map((product) => (
            <DrinkCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}