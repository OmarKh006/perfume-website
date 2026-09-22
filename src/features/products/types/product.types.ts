export type ProductId = string;

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVolume = {
  label: string;
  price: number;
};

export type ProductScentAnatomy = {
  description: string;
  top: string;
  heart: string;
  base: string;
};

export type Product = {
  id: ProductId;
  name: string;
  description: string;
  notes: string;
  price: number;
  images: string[];
  category: string;
  scentFamily: string;
  occasion: string;
  options: ProductOption[];
  volumes?: ProductVolume[];
  scentFamilyLabel?: string;
  occasionLabel?: string;
  availabilityLabel?: string;
  anatomy?: ProductScentAnatomy;
  relatedIds?: ProductId[];
};

export type ProductSort =
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc";

export type ProductListQuery = {
  search?: string;
  category?: string;
  sort?: ProductSort;
  page?: number;
  pageSize?: number;
};

export type ProductListResult = {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
};

export type ProductSearchParams = Record<
  string,
  string | string[] | undefined
>;
