import { Link } from "react-router-dom";
import google from "../images/google.png";

const Register = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-slate-100">
        <div className="mx-auto flex min-h-screen w-[300px] flex-col justify-center sm:w-[450px] md:w-[600px]">
          <h1 className="text-3xl font-semibold">Register</h1>
          <p className="my-3 ">Welcome Back! Please enter your details.</p>
          <div>
            <div className="mb-4">
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#3abff8]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#3abff8]"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#3abff8]"
              />
            </div>

            <input
              className="my-4 w-full cursor-pointer rounded-sm bg-black py-2 text-white transition-all hover:space-x-2 hover:tracking-wide"
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
            <div className="my-5 flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-black bg-white p-1 transition-all hover:tracking-wide">
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
        </div>
      </div>
    </div>
  );
};

export default Register;
