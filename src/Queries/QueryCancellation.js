import axios, { CancelToken } from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const QueryCancellation = () => {
  const [id, setId] = useState("");
  return (
    <>
      <input
        onChange={(e) => setId(e.target.value)}
        type="number"
        name=""
        id=""
      />
      <FetchName id={id} />
    </>
  );
};

const FetchName = ({ id }) => {
  const { data, isLoading, isError } = useQuery(
    ["id", id],
    () => {
      const source = CancelToken.source();
      const promise = new Promise((res) => setTimeout(res, 1000))
        .then(() => {
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, {
            cancelToken: source.token,
          });
        })
        .then((res) => res.data);
      promise.cancel = () => {
        source.cancel("Query was cancelled by react query!");
      };

      return promise;
    },
    {
      enabled: Boolean(id),
      retry: false,
    }
  );

  console.log(data);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <p>{data?.email}</p>
    </>
  );
};

export default QueryCancellation;
