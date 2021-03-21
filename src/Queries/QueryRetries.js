import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const QueriesRetries = () => {
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
    async () =>
      await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
    {
      enabled: Boolean(id),
      retry: 1, // If false, failed queries will not retry by default. If true, failed queries will retry infinitely. If set to an Int, e.g. 3, failed queries will retry until the failed query count meets that number
      retryDelay: 500,
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <p>{data?.data.email}</p>
    </>
  );
};

export default QueriesRetries;
