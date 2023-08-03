import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col w-1/2 items-center m-auto p-4"
    >
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="404"
        className="w-64 h-auto sm:w-96 md:w-128 lg:w-192 xl:w-256"
      />
      <p>
        Error Message: <i>{error.statusText || error.message}</i>
      </p>
      <button className="btn btn-accent">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
}
