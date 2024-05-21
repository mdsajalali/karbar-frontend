import { Link } from "react-router-dom";
import user from "../images/popular/two.png";

const Header = () => {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <h1 className="text-2xl   font-semibold lg:text-3xl">
          <Link to="/">KarBar</Link>
        </h1>
        <div>
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={user}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
