import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./PostsStyle.css"

// step 1
const Posts = () => {
  // step 4
  const posts = useLoaderData();
  return (
    <div>
      {/* step 5 */}
      <h2> total posts : {posts.length}</h2>

      {/* step 9 */}
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
