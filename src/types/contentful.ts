import { EntryFields, EntrySkeletonType } from "contentful";

export interface ProductFields {
  name: EntryFields.Text;
  dimensions: EntryFields.Object;
  image: EntryFields.AssetLink;
  indonesianName: EntryFields.Text;
  indonesianDimensions: EntryFields.Object;
  packsPerCarton: EntryFields.Text;
  indonesianPacksPerCarton: EntryFields.Text;
  totalQuantity: EntryFields.Text;
  indonesianTotalQuantity: EntryFields.Text;
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
  indonesianDimensions: Record<string, any>;
  packsPerCarton: string;
  indonesianPacksPerCarton: string;
  totalQuantity: string;
  indonesianTotalQuantity: string;
}

export interface FetchProductsResult {
  products: Product[];
  totalPages: number;
}

export interface ProductsActionResult {
  products: {
    id: string;
    name: string;
    dimensions: Record<string, any>;
    image_url: string;
    indonesianName: string;
    indonesianDimensions: Record<string, number>;
    packsPerCarton: string;
    indonesianPacksPerCarton: string;
    totalQuantity: string;
    indonesianTotalQuantity: string;
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
