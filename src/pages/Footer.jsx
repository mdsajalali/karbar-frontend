import facebook from "../images/social-icons/facebook.svg";
import telegram from "../images/social-icons/telegram.svg";
import twitter from "../images/social-icons/twitter.svg";
import youtube from "../images/social-icons/youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1D232A] py-12">
      <div className="mx-auto max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-white">
              <Link to="/">KarBar</Link>
            </h2>
            <ul>
              <li className="flex cursor-pointer items-center gap-2 text-gray-300">
                <img className="w-5" src={facebook} alt="" />
                <span>Facebook</span>
              </li>
              <li className="my-2 flex cursor-pointer items-center gap-2  text-gray-300">
                <img className="w-5" src={youtube} alt="" />
                <span>Youtube</span>
              </li>
              <li className="mb-2 flex cursor-pointer items-center gap-2  text-gray-300">
                <img className="w-5" src={telegram} alt="" />
                <span>Telegram</span>
              </li>
              <li className="flex cursor-pointer items-center gap-2  text-gray-300">
                <img className="w-5" src={twitter} alt="" />
                <span>Twitter</span>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Quick Link
            </h2>
            <ul>
              <li className="cursor-pointer text-gray-300">Woman</li>
              <li className="my-2 cursor-pointer text-gray-300">Men</li>
              <li className="mb-2 cursor-pointer text-gray-300">Kids</li>
              <li className="cursor-pointer text-gray-300">Beauty</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-white">Resources</h2>
            <ul>
              <li className="cursor-pointer text-gray-300">Support</li>
              <li className="my-2 cursor-pointer text-gray-300">Contact</li>
              <li className="mb-2 cursor-pointer text-gray-300">About</li>
              <li className="cursor-pointer text-gray-300">FAQ</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-white">Subscribe</h2>
            <ul>
              <li className="text-gray-300">
                Enter your email below to be the first to know about new
                collections and product launches.
              </li>
              <input
                type="email"
                className="mb-2 mr-2 mt-2 appearance-none rounded border border-gray-700 bg-gray-800 px-4 py-2 text-white sm:mb-0"
                placeholder="Your email"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t text-center">
        <p className="mt-5 text-[15px] text-white">
          © All Right Reserved{" "}
          <Link
            to="https://sajalali.vercel.app/"
            target="_blank"
            className="cursor-pointer underline"
          >
            Md. Sajal Ali
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
