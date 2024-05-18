import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import facebook from "../images/social-icons/facebook.svg";
import telegram from "../images/social-icons/telegram.svg";
import twitter from "../images/social-icons/twitter.svg";
import youtube from "../images/social-icons/youtube.svg";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-8 items-center">
        <div>
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name*:
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#3abff8]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email*:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#3abff8]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message*:
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-[#3abff8]"
                placeholder="Message"
                rows={4}
              />
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="py-2 flex items-center gap-2 px-4 bg-black text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Send Message <FiSend className="mr-2" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <FiMapPin className="text-gray-600 mr-2" />
            <p>1234 Main Street, City, Country</p>
          </div>
          <div className="flex items-center mb-4">
            <FiMail className="text-gray-600 mr-2" />
            <a
              href="mailto:info@example.com"
              className="text-[#3abff8] hover:underline"
            >
              poshcoder@gmail.com
            </a>
          </div>
          <div className="flex items-center mb-4">
            <FiPhone className="text-gray-600 mr-2" />
            <p>(123) 456-7890</p>
          </div>
          <div className="flex items-center space-x-4">
            <img className="w-5 cursor-pointer" src={facebook} alt="Facebook" />
            <img className="w-5 cursor-pointer" src={youtube} alt="Youtube" />
            <img className="w-5 cursor-pointer" src={telegram} alt="Telegram" />
            <img className="w-5 cursor-pointer" src={twitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
