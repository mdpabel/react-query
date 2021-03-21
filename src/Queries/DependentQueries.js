import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const DependentQueries = () => {
  //

  const userInfo = useQuery(
    "userId",
    async () =>
      await axios.get(
        `https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz`
      )
  );

  const countPost = useQuery(
    "posts",
    async () =>
      await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userInfo.data?.data[0].id}`
      ),
    {
      enabled: Boolean(userInfo.data?.data[0].id),
    }
  );

  console.log(countPost);

  return (
    <div>
      <p>user id : {userInfo.data?.data[0].id}</p>
      <p>Total post : {countPost.data?.data.length} </p>
    </div>
  );
};

export default DependentQueries;
