import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { increment, counter } = useCounter();

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // console.log(data);
  const { quote, quote_id, author, series } = !!data && data[0];
  console.log(quote, author);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> MultipleCustomHooks </h1>
        <hr />

        {loading ? (
          <div className="alert alert-success" role="alert">
            Loading ......
          </div>
        ) : (
          <div>
            <figure>
              <blockquote className="blockquote">
                <p>
                  {" "}
                  {quote_id}.- {quote}{" "}
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {author} <cite title="Source Title"> {series} </cite>
              </figcaption>
            </figure>

            <button className="btn btn-primary" onClick={increment}>
              {" "}
              Next Quote{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
