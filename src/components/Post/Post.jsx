import { Link, useNavigate } from "react-router-dom";

// step 6
const Post = ({ post }) => {
  // step 7
  const { id, title } = post;

  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid brown",
    padding: "10px",
    borderRadius: "20px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      {/* step 8 */}
      <h2>post id:{id}</h2>
      <p>post title: {title}</p>
      {/* step 9 */}
      <Link to={`/post/${id}`}>post details</Link>
      <Link to={`/post/${id}`}>
        <button>show details</button>
      </Link>
      <br />
      <button onClick={handleShowDetail}>click to show details</button>
    </div>
  );
};

export default Post;
