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
  quantityPerPack: EntryFields.Text;
  orderKey: EntryFields.Number;
}

export type ProductFieldsSkeleton = EntrySkeletonType<
  ProductFields,
  "products"
>;

export interface Product {
  id: string;
  name: string;
  dimensions: Record<string, number | string[] | number[]>;
  image_url: string;
  indonesianName: string;
  indonesianDimensions: Record<string, number | string[] | number[]>;
  packsPerCarton: string;
  indonesianPacksPerCarton: string;
  totalQuantity: string;
  indonesianTotalQuantity: string;
  quantityPerPack: string;
  orderKey: number;
}

export interface FetchProductsResult {
  products: Product[];
  totalPages: number;
}

export interface ProductsActionResult {
  products: Product[];
  totalPages: number;
}

export interface GetContentfulQuery {
  content_type: string;
  skip: number;
  limit: number;
  "fields.name[match]"?: string;
  "fields.indonesianName[match]"?: string;
}
