import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const useProductData = ({ priceSearch, category, size, color }) => {
  const axiosInstance = useAxios();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/getproduct?priceSearch=${priceSearch}&category=${category}&size=${size}&color=${color}`,
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [priceSearch, category, size, color]);

  return [products, loading];
};

export default useProductData;
