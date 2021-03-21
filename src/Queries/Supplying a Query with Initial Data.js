import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import initialData from "../initialData";

const SupplyingAQueryWithInitialData = () => {
  const userInfo = useQuery(
    "userId",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios.get(
        `https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz`
      );
    },
    {
      initialData: initialData,
      initialStale: true,
    }
  );

  return (
    <div>
      {userInfo.isLoading && <div>Loading...</div>}
      {userInfo.isSuccess && <div>{JSON.stringify(userInfo.data)}</div>}
      {userInfo.isFetching && <div>Updating...</div>}
    </div>
  );
};

export default SupplyingAQueryWithInitialData;
