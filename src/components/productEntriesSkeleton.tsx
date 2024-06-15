import { SimpleGrid } from "@chakra-ui/react";
import ProductEntrySkeleton from "./productEntrySkeleton";

export default function ProductEntriesSkeleton() {
  return (
    <SimpleGrid
      minH={"60vh"}
      columns={{ base: 1, md: 2, lg: 3 }}
      spacingX={20}
      spacingY={6}
      mt={10}
      px={6}
    >
      {[...Array(6)].map((_, i) => (
        <ProductEntrySkeleton key={i} />
      ))}
    </SimpleGrid>
  );
}
