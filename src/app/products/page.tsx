"use client";
import NoProducts from "@/components/noProducts";
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
  const totalPages: number = 10;

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
      {totalPages !== 0 ? (
        <ProductEntries query={query} currentPage={currentPage} />
      ) : (
        <NoProducts />
      )}
      <Pagination totalPages={totalPages} />
    </VStack>
  );
}
