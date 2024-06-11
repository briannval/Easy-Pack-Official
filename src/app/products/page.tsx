"use client";
import Search from "@/components/search";
import { Center, Heading, VStack } from "@chakra-ui/react";

export default function Products({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    pages: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.pages || 1;

  return (
    <VStack
      align={"center"}
      spacing={4}
      mt={"60px"}
      py={4}
      minW={"50%"}
      minH={"calc(100vh - 60px)"}
    >
      <Heading size={"lg"}>Find exactly what you're looking for.</Heading>
      <Center w={{ base: "60%", md: "40%" }}>
        <Search />
      </Center>
    </VStack>
  );
}
