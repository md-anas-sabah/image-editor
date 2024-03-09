import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "../service/auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("mdanassabah@gmail.com");
  const [password, setPassword] = useState("anassabah");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (login(email, password)) {
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col w-screen gap-10 -mt-10 justify-center items-center h-screen">
      <img
        src="https://speedybrand.io/images/sidebar-logo.svg"
        alt="logo"
        className="h-36 w-36"
      />
      <div className="w-96 border flex flex-col items-center justify-center p-10 rounded-lg">
        <h1 className="text-xl -mt-6 mb-10 font-semibold">
          Login to Image Editor
        </h1>
        <div className="flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="px-3 py-1 border rounded-md w-60"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="px-3 py-1 border rounded-md w-60"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="p-2 bg-orange-600 rounded-lg w-36 text-white font-semibold cursor-pointer hover:bg-red-700 transition-all duration-300 ease-in-out"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
