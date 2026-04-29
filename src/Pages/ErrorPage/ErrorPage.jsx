// import { Link } from "react-router-dom";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 border border-gray-500 hover:bg-gray-700 rounded-lg transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="w-72 h-72 bg-red-500 opacity-20 rounded-full blur-3xl absolute -top-10 -left-10"></div>
          <div className="w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl absolute bottom-0 right-0"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
