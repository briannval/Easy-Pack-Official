import { EntryFields, EntrySkeletonType } from "contentful";

export interface ProductFields {
  name: EntryFields.Text;
  dimensions: EntryFields.Object;
  image: EntryFields.AssetLink;
  indonesianName: EntryFields.Text;
  indonesianDimensions: EntryFields.Object;
}

export type ProductFieldsSkeleton = EntrySkeletonType<
  ProductFields,
  "products"
>;

export interface Product {
  id: string;
  name: string;
  dimensions: Record<string, number>;
  image_url: string;
  indonesianName: string;
  indonesianDimensions: Record<string, number>;
}

export interface FetchProductsResult {
  products: Product[];
  totalPages: number;
}

export interface ProductsActionResult {
  products: {
    id: string;
    name: string;
    dimensions: Record<string, number>;
    image_url: string;
    indonesianName: string;
    indonesianDimensions: Record<string, number>;
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
