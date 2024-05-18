import { useState, useEffect } from "react";
import axios from "axios";

const useProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://karbar-api.vercel.app/getproduct"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return products;
};

export default useProductData;
