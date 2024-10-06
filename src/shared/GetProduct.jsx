import axios from "axios";
import { useEffect, useState } from "react";

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://karbar-api.vercel.app/getproduct",
          {
            withCredentials: true, 
          },
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [products, loading];
};

export default useProductData;
