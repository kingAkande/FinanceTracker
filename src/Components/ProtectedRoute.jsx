import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

// ✅ This component protects routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { userLoggedIn, loading } = useAuth();

  // ✅ Show loading while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // ✅ Redirect to login if not authenticated
  if (!userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // ✅ Render the protected component
  return children;
};

export default ProtectedRoute;