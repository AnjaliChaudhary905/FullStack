import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setUserCart } from "../../redux/features/cartSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      console.log("Auth Response in Login Component:", res);

      if (res && res.data) {
        dispatch(setUserCart(res.data));
      }
      navigate("/");

    } catch (error) {
      console.error(error.response?.data?.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 relative">

      {/* Back to Home Navigation Anchor */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-gray-600 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm hover:text-[#0C6967] hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group active:scale-95"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back to home</span>
      </button>

      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl border border-gray-100">

        {/* Header / Brand Identity Alignment */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 select-none mb-3">
            <img className="w-8 h-8 object-contain" src="logo.png" alt="logo" />
            <h5 className="font-semibold text-[#0C6967] text-[25px] tracking-tight">momos</h5>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-800">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-[#6B788E]">
            Please enter your account details to sign in.
          </p>
        </div>

        {/* Login Form Container */}
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-xl border border-gray-200 px-3 py-3 text-gray-800 placeholder-gray-400 shadow-sm focus:border-[#0C6967] focus:ring-1 focus:ring-[#0C6967] focus:outline-none sm:text-sm transition-all"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Field with Eye Toggle */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-xl border border-gray-200 pl-3 pr-12 py-3 text-gray-800 placeholder-gray-400 shadow-sm focus:border-[#0C6967] focus:ring-1 focus:ring-[#0C6967] focus:outline-none sm:text-sm transition-all"
                  placeholder="••••••••"
                />

                {/* Visual Eye Icon Toggle Button */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-[#0C6967] focus:outline-none transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Styled Dark Teal Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#0C6967] hover:bg-[#0a5755] text-white py-3.5 rounded-full font-semibold text-center text-sm shadow-sm cursor-pointer transition-colors duration-150 active:scale-[0.99]"
            >
              Login
            </button>
          </div>

          {/* Account Redirect Footer Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account yet?{" "}
            <Link
              to="/sign-up"
              className="text-[#D95103] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;