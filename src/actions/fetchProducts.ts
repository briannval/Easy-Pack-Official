"use server";

import client from "@/lib/contentful";

const PRODUCTS_PER_PAGE = 6;

export default async function fetchProducts(
  query: string = "",
  currentPage: number = 1
) {
  let getContentfulQuery: {
    content_type: string;
    skip: number;
    limit: number;
    "fields.title[match]"?: string;
  } = {
    content_type: "products",
    skip: (currentPage - 1) * PRODUCTS_PER_PAGE,
    limit: PRODUCTS_PER_PAGE,
  };

  if (query) {
    getContentfulQuery = {
      ...getContentfulQuery,
      "fields.title[match]": query,
    };
  }

  const products = await client.getEntries(getContentfulQuery);

  return {
    products: products.items,
    totalPages: Math.ceil(Number(products.total) / PRODUCTS_PER_PAGE),
  };
}
