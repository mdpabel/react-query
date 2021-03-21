import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const Posts = ({ setPostId }) => {
  const postsQuery = useQuery("posts", async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
  });

  return (
    <>
      {postsQuery.isLoading && <div>Loading ...</div>}
      {postsQuery.isSuccess && (
        <ul>
          <h2>POSTS{postsQuery.isFetching && <span> ...</span>}</h2>
          {postsQuery.data?.data.map((post) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#" key={post.id}>
              <li onClick={() => setPostId(post.id)}>{post.title}</li>
              <br />
            </a>
          ))}
        </ul>
      )}
    </>
  );
};

const Post = ({ postId, setPostId }) => {
  const postQuery = useQuery(["post", postId], async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  });
  return (
    <div>
      <button onClick={() => setPostId(-1)}>Home page</button>
      {postQuery.isLoading && <div>Loading post....</div>}
      {postQuery.isSuccess && (
        <>
          <h3>{postQuery.data?.data.title}</h3>
          <p>{postQuery.data?.data.body}</p>
        </>
      )}
      {postQuery.isFetching && <p>Updating...</p>}
    </div>
  );
};

const QueryingRelatedListsAndItems = () => {
  const [postId, setPostId] = useState(-1);

  return (
    <div>
      {postId > -1 ? (
        <Post setPostId={setPostId} postId={postId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </div>
  );
};

export default QueryingRelatedListsAndItems;
