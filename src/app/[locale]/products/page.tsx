"use client";
import fetchProducts from "@/actions/fetchProducts";
import NoProducts from "@/components/noProducts";
import Pagination from "@/components/pagination";
import ProductEntries from "@/components/productEntries";
import ProductEntriesSkeleton from "@/components/productEntriesSkeleton";
import Search from "@/components/search";
import { Product } from "@/types/contentful";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import { useTranslations, useLocale } from "next-intl";
import { redirect } from "next/navigation";

interface ProductsState {
  products: Product[];
  totalPages: number;
  loading: boolean;
}

type ProductsAction =
  | { type: "FETCH_START" }
  | {
      type: "FETCH_SUCCESS";
      payload: { products: Product[]; totalPages: number };
    }
  | { type: "FETCH_FAILURE" };

const initialState: ProductsState = {
  products: [],
  totalPages: 0,
  loading: true,
};

const productsReducer = (
  state: ProductsState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function Products({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page: string;
  };
}) {
  const query: string = searchParams?.query || "";
  const currentPage: number = Number(searchParams?.page) || 1;
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const { products, totalPages, loading } = state;
  const t = useTranslations("Pages.Products");
  const l = useLocale();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const { products, totalPages } = await fetchProducts(
          query,
          currentPage
        );
        dispatch({ type: "FETCH_SUCCESS", payload: { products, totalPages } });
      } catch (error) {
        console.error(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    fetchData();
  }, [query, currentPage]);

  if (
    (totalPages === 0 && currentPage !== 1 && query) ||
    (totalPages !== 0 && (currentPage < 1 || currentPage > totalPages))
  ) {
    redirect(`/${l}/invalid-link-not-found`);
  }

  return (
    <VStack
      align={"center"}
      textAlign={"center"}
      spacing={4}
      mt={"60px"}
      py={12}
      minW={"50%"}
      minH={"calc(100vh - 60px)"}
    >
      <Box>
        <Heading
          as={"h1"}
          size="xl"
          textAlign="center"
          display={{ base: "block", md: "none" }}
          id="heading-base"
        >
          {t("headingbase")}
        </Heading>
        <Heading
          as={"h1"}
          size="xl"
          textAlign="center"
          display={{ base: "none", md: "block" }}
          id="heading-md"
        >
          {t("headingmd")}
        </Heading>
      </Box>
      <Center w={{ base: "80%", md: "40%" }}>
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
