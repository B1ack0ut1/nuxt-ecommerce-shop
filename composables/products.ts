export async function useProducts() {
  const {
    data: products,
    pending,
    error,
  } = await useFetch("https://fakestoreapi.com/products");
  return { products, pending, error };
}
