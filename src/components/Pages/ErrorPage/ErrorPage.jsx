import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            
            <h1 className="text-7xl font-bold text-red-500">
                404
            </h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-600 mt-2 mb-6">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link to="/">
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                    Back Home
                </button>
            </Link>

        </div>
    );
};

export default ErrorPage;