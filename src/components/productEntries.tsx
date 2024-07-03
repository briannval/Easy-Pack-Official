import { Product } from "@/types/contentful";
import { SimpleGrid } from "@chakra-ui/react";
import ProductEntry from "./productEntry";

export default function ProductEntries({ products }: { products: Product[] }) {
  return (
    <SimpleGrid
      minH={"60vh"}
      w={"full"}
      columns={{ base: 1, md: 2, lg: 3 }}
      spacingX={20}
      spacingY={6}
      mt={10}
      px={6}
    >
      {products.map((product) => (
        <ProductEntry key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}
