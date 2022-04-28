import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { increment, counter } = useCounter();
  const [medidas, setMedidas] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote, quote_id, author, series } = !!data && data[0];
  console.log(quote, author);

  const parrafoRef = useRef();

  useLayoutEffect(() => {
    // console.log(parrafoRef.current.getBoundingClientRect());
    setMedidas(parrafoRef.current.getBoundingClientRect());
  }, [quote]);

  // console.log(data);

  // RETURN
  return (
    <div className="m-5">
      <div className="container">
        <h1> useLayoutEffect </h1>
        <hr />
        <figure>
          <blockquote className="blockquote cambiarTamano">
            <p className="bg-success" ref={parrafoRef}>
              {" "}
              {quote_id}.- {quote}{" "}
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {author} <cite title="Source Title"> {series} </cite>
          </figcaption>
        </figure>
        <pre> {JSON.stringify(medidas, null, 3)} </pre>
        <button className="btn btn-primary" onClick={increment}>
          {" "}
          Next Quote{" "}
        </button>
      </div>
    </div>
  );
};
