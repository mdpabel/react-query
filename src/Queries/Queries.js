import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

const Queries = () => {
  // const [hide, setHide] = React.useState(false);
  const [id, setId] = React.useState(1);
  console.log(id);
  return (
    <>
      {/* <button onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</button>
      {!hide && <Persons  />} */}
      <input
        onChange={(e) => setId(e.target.value)}
        type="number"
        name=""
        placeholder={id}
        id=""
      />
      {/* <Count />
      <Persons queryKey="persons1" /> */}
      <hr />
      <Person id={id} />
      {/* <Posts /> */}
      {/* <Persons queryKey="persons1" /> */}
      {/* <ReactQueryDevtools /> */}
    </>
  );
};

const Person = ({ id }) => {
  const { data, isLoading, isError } = useQuery(
    id,
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    },
    {
      // refetchOnWindowFocus: false, //
      // staleTime: Infinity,
      // cacheTime: Infinity, // Default time 5 sec
    }
  );
  console.log(data);
  return (
    <>
      <p>{data?.data.name}</p>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Please enter Id</p>}
    </>
  );
};

const Count = () => {
  const { data, isSuccess } = useFetchPerson();
  return isSuccess && <p>Total persons : {data?.data.length} </p>;
};

const useFetchPerson = () => {
  return useQuery(
    "person",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios.get("https://jsonplaceholder.typicode.com/users");
    },
    {
      // refetchOnWindowFocus: false, //
      // staleTime: Infinity,
      // cacheTime: Infinity, // Default time 5 sec
    }
  );
};

const Posts = () => {
  const { data, isError, isLoading, isSuccess, isFetching } = useQuery(
    "posts",
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
  );
  console.log(data?.data);
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

const Persons = ({ queryKey }) => {
  const { data, isError, isLoading, isSuccess, isFetching } = useFetchPerson();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isSuccess &&
        data.data.map((person) => <p key={person.id}>{person.name}</p>)}
      {isError && <p>Something went wrong...</p>}
      {isFetching && <p>Updating...</p>}
    </>
  );
};

export default Queries;
