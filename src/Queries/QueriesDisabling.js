import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const QueriesDisabling = () => {
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
      enabled: Boolean(id), // Set this to false to disable this query from automatically running.
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

export default QueriesDisabling;
