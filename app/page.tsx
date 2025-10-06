import { mockProducts } from "@/lib/mocks";
import { ProductCard } from "./productCard";

export default function HomePage() {
  return (
    <div>
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the E-commerce Store</h1>
        <p className="text-lg mb-2"> Showing {mockProducts.length} products here:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
