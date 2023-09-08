import { useEffect, useState } from "react";
import Api from "../../../server/index";
import { useParams } from "react-router-dom";

export const useSingle = () => {
  const [loading, setLoading] = useState(true);
  const [single, setSingle] = useState({});
  const { slug } = useParams();

  const getData = async () => {
    try {
      const { data } = await Api.get("/site/product/" + slug);
      setSingle(data);
      setLoading(false);
    } catch (e) {
      console.log(e, "father fucker");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { single, loading };
};
