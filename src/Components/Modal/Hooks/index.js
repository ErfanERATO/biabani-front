import { useEffect, useState } from "react";
import Api from "../../../server/index";

export const useSingle = () => {

    const [loading, setLoading] = useState(true);
    const [single, setSingle] = useState({});
  
    const getData = async (slug) => {
      try {
        const { data } = await Api.get(`/site/product/` + slug);
        setSingle(data);
        setLoading(false);
      } catch (e) {
        console.log(e, "father fucker");
      } finally {
        setLoading(false);
      }
    };

    return { single, loading,getData };
  };
  