import { Link, useNavigate } from "react-router-dom";
import google from "../images/google.png";
import { toast } from "sonner";
import axiosInstance from "../utils/axiosInstance";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userData = { name, email, password };
    try {
      const { status, data } = await axiosInstance.post("/register", userData);

      if (status === 201) {
        navigate("/");
        toast.success(data?.message);
      } else {
        console.error("Registration failed:", status);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  // google login
  const googleLogin = () => {
    window.open("https://karbar-api.vercel.app", "_self");
  };

  return (
    <div className="flex">
      <div className="flex-1 bg-slate-100">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex min-h-screen w-[300px] flex-col justify-center sm:w-[450px] md:w-[600px]"
        >
          <h1 className="text-3xl font-semibold">Register</h1>
          <p className="my-3">Welcome Back! Please enter your details.</p>
          <div>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full rounded-md border p-3 text-gray-700 focus:border-[#3abff8] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border p-3 text-gray-700 focus:border-[#3abff8] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full rounded-md border p-3 text-gray-700 focus:border-[#3abff8] focus:outline-none"
              />
            </div>

            <input
              className="my-4 w-full cursor-pointer rounded-sm bg-black py-3 text-white transition-all hover:space-x-2 hover:tracking-wide"
              type="submit"
              value="Register"
            />
          </div>
          <div className="my-2 flex items-center gap-1">
            <div className="h-[1px] w-1/2 bg-slate-400"></div>
            <div className="-mt-1">or</div>
            <div className="h-[1px] w-1/2 bg-slate-400"></div>
          </div>
          <div>
            <div
              onClick={googleLogin}
              className="my-5 flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-black bg-white p-1 transition-all hover:tracking-wide"
            >
              <img className="w-10" src={google} alt="Google" />
              <p className="text-[18px] font-semibold">Sign In With Google</p>
            </div>
          </div>

          <p className="text-center">
            Already have an account? Please{" "}
            <Link className="font-bold underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
