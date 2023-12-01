import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./UsersStyle.css"

const Users = () => {
  // 2nd
    const users = useLoaderData();
    console.log(users);
    
  return (
    <div>
      {/* 3rd */}
      <h3>our users: {users.length}</h3>
      <p>users behavior too friendly </p>
      {/* 4th */}
      <div  className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
