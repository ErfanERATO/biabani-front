import {
  useNavigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";

export const useUrl = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const addToQuery = (key, val, push = true) => {
    let params = {};
    if (push) {
      searchParams.forEach((value, key) => {
        params[key] = value;
      });
      params[key] = val;
    } else {
      params[key] = val;
    }
    const options = {
      search: `?${createSearchParams(params)}`,
    };
    navigate(options, { replace: true });
  };

  return { addToQuery };
};
