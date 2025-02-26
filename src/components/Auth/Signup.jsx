import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { GanttChart } from "lucide-react"; // Google logo alternative from Lucide React

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect after signup
    } catch (err) {
      setError("Error signing up. Try again.");
    }
  };

  // Google Signup
  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError("Google Signup Failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="p-6 bg-white shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-3 w-full rounded"
          required
        />

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-3 w-full rounded"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2 text-gray-600"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full mb-2">
          Signup
        </button>

        {/* Google Signup Button with Lucide Icon */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="flex items-center justify-center border border-blue-500 text-black px-4 py-2 rounded w-full bg-white hover:bg-gray-100"
        >
          <GanttChart className="w-5 h-5 mr-2 text-red-500" />
          Signup with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
