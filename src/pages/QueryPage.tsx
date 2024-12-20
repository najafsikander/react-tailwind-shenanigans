import { useQuery } from "react-query";
import { fetchPosts } from "../services/posts";
import SectionCard from "../components/SectionCard";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const QueryPage = () => {
  const query = useQuery("fetch-posts", fetchPosts);

  const { data, status, error, isFetching } = query;
  console.log({ data, status, error, isFetching });
  return (
    <>
      <SectionCard height="100vh">
        <h1>React Query Fetching Demo</h1>
        {status === "loading" && <h1>Loading Data</h1>}

        {error != null ||
          (error != undefined && (
            <h1>Error occured while fetching: {error}</h1>
          ))}

        {data != undefined && 
            <ol className="text-center">
               { data.map((post: Post) => (<li key={post.id} className="border-b-2 text-lg capitalize" title={'Post ID:' + post.id}> {post.title}</li>))}
            </ol>
        }
      </SectionCard>
    </>
  );
};

export default QueryPage;
