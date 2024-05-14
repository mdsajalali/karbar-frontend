import { Link } from "react-router-dom";
import google from "../images/google.png";

const Login = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-slate-100">
        <div className="mx-auto flex  min-h-screen w-[300px] flex-col justify-center sm:w-[450px] md:w-[600px]">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="my-3 ">Welcome Back! Please enter your details.</p>
          <div>
            <input
              className="mb-5 mt-2 w-full rounded-sm border-none p-2 outline-none"
              type="email"
              placeholder="Enter your email..."
              name="email"
              required
            />
            <div className="relative">
              <input
                className="w-full p-2 outline-none "
                name="password"
                type="password"
                placeholder="Password..."
                required
              />

              <span className="absolute right-2 top-3 cursor-pointer"></span>
            </div>

            <div className="mt-4 font-semibold underline">
              <Link>Forget Password?</Link>
            </div>

            <input
              className="my-4 w-full cursor-pointer rounded-sm bg-black py-2 text-white transition-all hover:space-x-2 hover:tracking-wide"
              type="submit"
              value="Login"
            />
          </div>
          <div className="my-2 flex items-center gap-1">
            <div className="h-[1px] w-1/2 bg-slate-400"></div>
            <div className="-mt-1">or</div>
            <div className="h-[1px] w-1/2 bg-slate-400"></div>
          </div>
          <div>
            <div className="my-5 flex cursor-pointer items-center justify-center gap-1 rounded-sm border border-black bg-white p-1 transition-all hover:tracking-wide ">
              <img className="w-10" src={google} alt="Google" />
              <p className="text-[18px] font-semibold">Sign In With Google</p>
            </div>
          </div>

          <p className="text-center">
            New to this website? Please{" "}
            <Link className="font-bold underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
