"use server";
import { FetchProductsResult, ProductFieldsSkeleton } from "@/types/contentful";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const PRODUCTS_PER_PAGE = 6;

export default async function fetchProducts(
  query: string = "",
  currentPage: number = 1
): Promise<FetchProductsResult> {
  let getContentfulQuery: {
    content_type: string;
    skip: number;
    limit: number;
    "fields.name[match]"?: string;
  } = {
    content_type: "products",
    skip: (currentPage - 1) * PRODUCTS_PER_PAGE,
    limit: PRODUCTS_PER_PAGE,
  };

  if (query) {
    getContentfulQuery = {
      ...getContentfulQuery,
      "fields.name[match]": query,
    };
  }

  const products = await client.getEntries<ProductFieldsSkeleton>(
    getContentfulQuery
  );
  console.log(products);

  return {
    products: products.items.map((product) => ({
      id: product.sys.id,
      name: product.fields.name,
      description: product.fields.description,
      image_url: `http:${(product.fields.image! as any).fields.file.url}`,
    })),
    totalPages: Math.ceil(Number(products.items.length) / PRODUCTS_PER_PAGE),
  };
}
