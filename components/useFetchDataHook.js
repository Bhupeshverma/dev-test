import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const useFetchDataHook = (pageIndex) => {
  const { data, error } = useSWR(`/api/data?page=${pageIndex}`, fetcher);
  return {
    response: data,
    isLoading: !error && !data,
    isError: error
  };
};

export default useFetchDataHook;
