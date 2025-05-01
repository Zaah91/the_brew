import { getCoffee } from '@/utils/api';
import { Data } from '@/utils/interfaces';
import ProductInfoCard from '@/components/ProductInfoCard';


export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Fetch product details using the ID
  const products: Data[] = await getCoffee(); // Assuming getCoffee fetches all products
  console.log(products); // Log the products array for debugging
  console.log(`ID from params: ${id}, Type: ${typeof id}`); // Log the ID and its type
  console.log(`ID in products: ${products[0]?.id}, Type: ${typeof products[0]?.id}`); // Log the first product ID and its type

  // Convert product IDs to strings for comparison
  const product: Data | undefined = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      <ProductInfoCard product={product} /> {/* Render the ProductInfoCard with the product data */}
    </div>
  );
}