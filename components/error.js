import React from "react";
import { FcDisclaimer } from "react-icons/fc";

const Error = () => {
  return (
    <div className="col text-center">
      <FcDisclaimer style={{ fontSize: 300 }} />
      <h3 className="text-muted">An error occured while fetching the data.</h3>
    </div>
  );
};

export default Error;
