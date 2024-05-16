import { Link } from "react-router-dom";
import user from "../images/popular/two.png"

const Header = () => {
  return (
    <header className="border-b">
      <div className="max-w-[1500px] mx-auto py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl   lg:text-3xl font-semibold">
          <Link to="/">KarBar</Link>
        </h1>
        <div>
            <img className="w-12 h-12 object-cover rounded-full" src={user} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
