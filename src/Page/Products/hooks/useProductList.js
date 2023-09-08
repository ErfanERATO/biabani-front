import { useEffect, useState } from "react";
import Api from "../../../server";

export const useProductList = () => {

  const [form, setForm] = useState({
    searchProduct: null,
    option: null,
  });
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState({});

  const getProductList = async () => {
    try {
      const { data } = await Api.get(`/site/products`, {
        params: {
          limit: 8,
        },
      });
      setProductsData(data?.data);
      setLoading(false);
      console.log(data.data, "mother fucker");
    } catch (e) {
      console.log(e, "123143425");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return {
    loading,
    productsData,
  };
};
