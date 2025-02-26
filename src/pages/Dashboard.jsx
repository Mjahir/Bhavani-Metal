import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch the authenticated user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login"); // Redirect if not logged in
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
        
        {user ? (
          <div>
            <p className="text-lg font-medium">👤 {user.displayName || "User"}</p>
            <p className="text-sm text-gray-600">📧 {user.email}</p>
          </div>
        ) : (
          <p className="text-gray-500">Loading user info...</p>
        )}

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
