import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const time = async (req, res) => {
  if (req.method === "GET") {
    await new Promise((r) => setTimeout(r, 500));
    res.json({
      time: Date.now(),
    });
  }
};

const RefetchIntervals = () => {
  const timeQuery = useQuery(
    "posts",
    async () => {
      return axios.get("/api/time.js").then((res) => res.data);
    },
    {
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
    }
  );

  return (
    <div>
      <h1>Server Time {timeQuery.isFetching ? "..." : null}</h1>
      <div>
        {timeQuery.isLoading
          ? "Loading time..."
          : new Date(timeQuery.data.time).toLocaleString()}
      </div>
    </div>
  );
};

export default RefetchIntervals;
