import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const fetch = useFetch("https://www.breakingbadapi.com/api/quotes/1");
  console.log(fetch);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> MultipleCustomHooks </h1>
        <hr />
      </div>
    </div>
  );
};
