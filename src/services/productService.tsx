import axiosInstance from "@/lib/axios";

// FakeStore API Product type
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

// Get all products
export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>("/products");
  return data;
};

// Get single product
export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await axiosInstance.get<Product>(`/products/${id}`);
  return data;
};

// Create product
export const createProduct = async (product: Omit<Product, "id">): Promise<Product> => {
  const { data } = await axiosInstance.post<Product>("/products", product);
  return data;
};

// Update product
export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  const { data } = await axiosInstance.put<Product>(`/products/${id}`, product);
  return data;
};

// Delete product
export const deleteProduct = async (id: number): Promise<Product> => {
  const { data } = await axiosInstance.delete<Product>(`/products/${id}`);
  return data;
};
