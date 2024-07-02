import { EntryFields, EntrySkeletonType } from "contentful";

export interface ProductFields {
  name: EntryFields.Text;
  description: EntryFields.Text;
  image: EntryFields.AssetLink;
}

export type ProductFieldsSkeleton = EntrySkeletonType<
  ProductFields,
  "products"
>;

export interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export interface FetchProductsResult {
  products: Product[];
  totalPages: number;
}

export interface ProductsActionResult {
  products: {
    id: string;
    name: string;
    description: string;
    image_url: string;
  }[];
  totalPages: number;
}

export interface GetContentfulQuery {
  content_type: string;
  skip: number;
  limit: number;
  "fields.name[match]"?: string;
}
