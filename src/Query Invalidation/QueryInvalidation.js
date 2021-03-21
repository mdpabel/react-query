import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";

const QueryInvalidation = () => {
  const data = useQuery(
    "number",
    async () => {
      await new Promise((res) => setTimeout(res, 1000));
      return axios.get("http://localhost:4000/random");
    },
    {
      staleTime: Infinity,
    }
  );

  const queryClient = useQueryClient();

  return (
    <div>
      {data.isLoading && <div>Loading...</div>}
      {data.isSuccess && data.data?.data?.num}
      <br />
      <button
        onClick={() =>
          queryClient.invalidateQueries("number", {
            refetchActive: false,
            refetchInactive: false,
          })
        }
      >
        Invalidate query
      </button>
    </div>
  );
};

export default QueryInvalidation;
