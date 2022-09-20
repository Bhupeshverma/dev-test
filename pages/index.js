import { useState } from "react";
import Pagination from "react-responsive-pagination";
import useFetchDataHook from "../components/useFetchDataHook";

import Cards from "../components/cards";
import Placeholder from "../components/placeholder";
import Error from "../components/error";

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);
  const { response, isLoading, isError } = useFetchDataHook(pageIndex);
  const handlePageChange = (page) => {
    setPageIndex(page);
  };
  return (
    <div className="container mt-5">
      <h6>Top Home Loan Products</h6>
      <hr />
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Placeholder />
      ) : (
        <>
          <div className="row row-cols-auto" style={{ placeContent: "center" }}>
            {response.data.hits.map((item) => {
              return <Cards product={item} key={item.uuid} />;
            })}
          </div>
          <Pagination
            total={response.data.meta.pageCount}
            current={pageIndex}
            onPageChange={(page) => handlePageChange(page)}
          />
        </>
      )}
    </div>
  );
}
