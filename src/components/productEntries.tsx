import { SimpleGrid } from "@chakra-ui/react";

export default function ProductEntries({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  return <SimpleGrid minH={"60vh"} columns={{ base: 1, md: 3 }}></SimpleGrid>;
}
