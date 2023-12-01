import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>ooppss!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div className="">
          <h3>404 page not found</h3>
          <p>go back where you from</p>
          <Link to='/'>
            <button>go home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Errorpage;
