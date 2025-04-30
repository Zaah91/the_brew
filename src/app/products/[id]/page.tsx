import { getCoffee } from '@/utils/api';
import { Data } from '@/utils/interfaces';

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
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category.name}</p>
      <img src={product.image.url} alt={product.name} width={200} height={200} />
      <p>{product.description}</p>
    </div>
  );
}