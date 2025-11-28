import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';

import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [disable, setDisable] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { signIn, googleSignIn } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // -----------------------------------------------------
  // LOGIN FUNCTION
  // -----------------------------------------------------
  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMsg(""); // clear old error

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // 1️⃣ Firebase Login
      const result = await signIn(email, password);

      // 2️⃣ Request JWT from backend
      const jwtRes = await axiosPublic.post("/jwt", { email });
      localStorage.setItem("access-token", jwtRes.data.token);

      // 3️⃣ Save/Sync user to backend
      await axiosPublic.post(
        "/user",
        {
          email,
          name: result.user.displayName || "",
          photoURL: result.user.photoURL || "",
        },
        {
          headers: {
            authorization: `Bearer ${jwtRes.data.token}`,
          },
        }
      );

      // 4️⃣ Success message
      Swal.fire({
        title: 'Login Successful',
        icon: "success",
        background: "#fefefe",
      });

      // 5️⃣ Redirect
      navigate(from, { replace: true });

    } catch (error) {
      console.log(error);

      let message = "Login failed. Please check your email and password.";

      if (error.code === "auth/user-not-found") {
        message = "No account found with this email. Please sign up first.";
      } else if (error.code === "auth/wrong-password") {
        message = "Incorrect password. Please try again.";
      } else if (error.code === "auth/invalid-email") {
        message = "Invalid email format.";
      }

      setErrorMsg(message);

      Swal.fire({
        title: 'Login failed',
        text: message,
        icon: "error",
      });
    }
  };

  // -----------------------------------------------------
  // GOOGLE SIGN-IN
  // -----------------------------------------------------
  const handleGoogle = async () => {
    try {
      setErrorMsg("");
      const result = await googleSignIn();
      const email = result.user.email;

      const jwtRes = await axiosPublic.post("/jwt", { email });
      localStorage.setItem("access-token", jwtRes.data.token);

      await axiosPublic.post(
        "/user",
        {
          email,
          name: result.user.displayName,
          photoURL: result.user.photoURL,
        },
        {
          headers: {
            authorization: `Bearer ${jwtRes.data.token}`,
          },
        }
      );

      navigate(from, { replace: true });

    } catch (error) {
      console.log(error);
      setErrorMsg("Google sign-in failed. Please try again.");
    }
  };

  // -----------------------------------------------------
  // CAPTCHA
  // -----------------------------------------------------
  const handleValidateCaptcha = (e) => {
    if (validateCaptcha(e.target.value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 via-orange-300 to-yellow-200 px-4 py-8">
      <Helmet><title>Yoku | Login</title></Helmet>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-md bg-opacity-90">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-2">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Login to continue to <span className="font-bold text-orange-700">Yoku</span>
        </p>

        {/* Error message */}
        {errorMsg && (
          <div className="mb-4 text-red-600 text-sm font-semibold text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-lg border-gray-300"
            />
          </div>

          {/* Password with show/hide */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Enter your password"
                className="input input-bordered w-full rounded-lg border-gray-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-orange-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Captcha */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Captcha Verification</label>
            <LoadCanvasTemplate />
            <input
              onBlur={handleValidateCaptcha}
              type="text"
              name="captcha"
              placeholder="Type the captcha here"
              className="input input-bordered w-full mt-2 rounded-lg border-orange-400"
            />
          </div>

          {/* Login Button */}
          <button
            disabled={disable}
            className="btn w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <span className="flex-grow h-px bg-gray-300"></span>
            <span className="px-3 text-gray-600">OR</span>
            <span className="flex-grow h-px bg-gray-300"></span>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogle}
            className="btn btn-outline w-full border-orange-500 text-orange-600 hover:bg-orange-100 flex items-center gap-2 rounded-lg"
          >
            <FaGoogle /> Login with Google
          </button>

          <p className="text-center text-gray-700 mt-3">
            New to Yoku?{" "}
            <Link to="/signup" className="text-orange-600 font-bold hover:underline">
              Register
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
