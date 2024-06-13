"use client";
import fetchProducts from "@/actions/fetchProducts";
import NoProducts from "@/components/noProducts";
import Pagination from "@/components/pagination";
import ProductEntries from "@/components/productEntries";
import ProductEntriesSkeleton from "@/components/productEntriesSkeleton";
import Search from "@/components/search";
import { FetchProductsResult, Product } from "@/types/contentful";
import { Center, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";

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
  const [totalPages, setTotalPages] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products, totalPages } = await fetchProducts(
          query,
          currentPage
        );
        console.log(products, totalPages);
        setProducts(products);
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, currentPage]);

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
      {loading ? (
        <ProductEntriesSkeleton />
      ) : totalPages !== 0 ? (
        <ProductEntries products={products} />
      ) : (
        <NoProducts />
      )}

      <Pagination totalPages={totalPages} />
    </VStack>
  );
}
