import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchPost = () => {
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };
};

const Posts = () => {
  const { data, isError, isLoading, isSuccess, isFetching } = useQuery(
    "posts",
    fetchPost()
  );
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        data.data.map((posts) => <p key={posts.id}>{posts.title}</p>)}
      {isError && <p>Something went wrong...</p>}
      {isFetching && <p>Updating...</p>}
    </>
  );
};

const QueryPrefetching = () => {
  const [showPosts, setShowPosts] = React.useState(false);

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery("posts", fetchPost());
  }, [queryClient]);

  return (
    <div>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Show" : "Hide"}
      </button>
      {showPosts && <Posts />}
    </div>
  );
};

export default QueryPrefetching;
