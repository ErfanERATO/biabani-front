import { useEffect, useState } from "react";
import Api from "../../../server";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { useUrl } from "../../../hooks/useUrl";

export const useProductList = () => {
  const [form, setForm] = useState({
    searchProduct: null,
    option: null,
  });
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState({});
  const [searchParams] = useSearchParams();
  const [SearchParamDebounce] = useDebounce(searchParams, 600);
  const { SearchParamsList } = useUrl();

  const getProductList = async () => {
    try {
      const _params = SearchParamsList();
      const { data } = await Api.get(`/site/products`, {
        params: _params,
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
  }, [SearchParamDebounce]);

  return {
    loading,
    productsData,
  };
};
export const useSingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState({});

  const getProduct = async (slug) => {
    try {
      const { data } = await Api.get(`/site/product/`+slug);
      setProductsData(data?.data);
      setLoading(false);
      console.log(data.data, "mother fucker");
    } catch (e) {
      console.log(e, "123143425");
    } finally {
      setLoading(false);
    }
  };



  return {
    loading,
    productsData,
    getProduct
  };
};
