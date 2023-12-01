import { Link } from "react-router-dom";

// 5th
const User = ({ user }) => {
  // 6th
  const { id, name, email, phone } = user;

  const userStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "20px",
  };

  return (
    <div style={userStyle}>
      {/* 7th */}
      <h3>name: {name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>show details</Link>
      <Link to={`/user/${id}`}>
        <button>click me</button>
      </Link>
    </div>
  );
};

// User.propTypes = {
//   user: PropTypes.object
// };

export default User;
