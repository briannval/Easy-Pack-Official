"use client";
import Pagination from "@/components/pagination";
import ProductEntries from "@/components/productEntries";
import Search from "@/components/search";
import { Center, Heading, VStack } from "@chakra-ui/react";

export default function Products({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <VStack
      align={"center"}
      spacing={4}
      mt={"60px"}
      py={12}
      minW={"50%"}
      minH={"calc(100vh - 60px)"}
    >
      <Heading size={"xl"}>Find exactly what you're looking for.</Heading>
      <Center w={{ base: "60%", md: "40%" }}>
        <Search />
      </Center>
      <ProductEntries query={query} currentPage={currentPage} />
      <Pagination totalPages={10} />
    </VStack>
  );
}
