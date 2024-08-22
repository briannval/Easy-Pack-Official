import { EntryFields, EntrySkeletonType } from "contentful";

export interface ProductFields {
  name: EntryFields.Text;
  description: EntryFields.Text;
  image: EntryFields.AssetLink;
  indonesianName: EntryFields.Text;
  indonesianDescription: EntryFields.Text;
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
  indonesianName: string;
  indonesianDescription: string;
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
    indonesianName: string;
    indonesianDescription: string;
  }[];
  totalPages: number;
}

export interface GetContentfulQuery {
  content_type: string;
  skip: number;
  limit: number;
  "fields.name[match]"?: string;
  "fields.indonesianName[match]"?: string;
}
