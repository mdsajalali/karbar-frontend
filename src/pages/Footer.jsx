import facebook from "../images/social-icons/facebook.svg";
import telegram from "../images/social-icons/telegram.svg";
import twitter from "../images/social-icons/twitter.svg";
import youtube from "../images/social-icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D232A] py-12">
      <div className="max-w-[1500px] mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">Dokan</h2>
            <ul>
              <li className="text-gray-300 flex items-center gap-2 cursor-pointer">
                <img className="w-5" src={facebook} alt="" />
                <span>Facebook</span>
              </li>
              <li className="text-gray-300 flex items-center gap-2 my-2  cursor-pointer">
                <img className="w-5" src={youtube} alt="" />
                <span>Youtube</span>
              </li>
              <li className="text-gray-300 flex items-center gap-2 mb-2  cursor-pointer">
                <img className="w-5" src={telegram} alt="" />
                <span>Telegram</span>
              </li>
              <li className="text-gray-300 flex items-center gap-2  cursor-pointer">
                <img className="w-5" src={twitter} alt="" />
                <span>Twitter</span>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Link
            </h2>
            <ul>
              <li className="text-gray-300 my-2 cursor-pointer hover:translate-x-1 transition-all">
                Men
              </li>
              <li className="text-gray-300 cursor-pointer hover:translate-x-1 transition-all">
                Woman
              </li>
              <li className="text-gray-300 mb-2 cursor-pointer hover:translate-x-1 transition-all mt-1">
                Kids
              </li>
              <li className="text-gray-300 cursor-pointer hover:translate-x-1 transition-all">
                Beauty
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li className="text-gray-300 cursor-pointer hover:translate-x-1 transition-all ">
                Support
              </li>
              <li className="text-gray-300 cursor-pointer  hover:translate-x-1 transition-all my-2">
                Contact
              </li>
              <li className="text-gray-300 cursor-pointer hover:translate-x-1 transition-all  mb-2">
                About
              </li>
              <li className="text-gray-300 cursor-pointer hover:translate-x-1 transition-all ">
                FAQ
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-white text-lg font-semibold mb-4">Subscribe</h2>
            <ul>
              <li className="text-gray-300">
                Enter your email below to be the first to know about new
                collections and product launches.
              </li>
              <input
                type="email"
                className="bg-gray-800 mt-2 appearance-none border border-gray-700 rounded py-2 px-4 text-white mr-2 mb-2 sm:mb-0"
                placeholder="Your email"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t text-center">
        <p className="text-white mt-5 text-[15px]">
          © All Right Reserved Posh Coder
        </p>
      </div>
    </footer>
  );
};

export default Footer;
