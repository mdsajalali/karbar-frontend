import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import facebook from "../images/social-icons/facebook.svg";
import telegram from "../images/social-icons/telegram.svg";
import twitter from "../images/social-icons/twitter.svg";
import youtube from "../images/social-icons/youtube.svg";

const Contact = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-20">
        <div>
          <div className="mx-auto max-w-md">
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="mb-2 block font-medium text-gray-700"
              >
                Full Name*:
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Name"
                className="w-full rounded-md border px-3 py-2 text-gray-700 focus:border-[#3abff8] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700"
              >
                Email*:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border px-3 py-2 text-gray-700 focus:border-[#3abff8] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-gray-700"
              >
                Message*:
              </label>
              <textarea
                className="w-full rounded-md border px-3 py-2 text-gray-700 focus:border-[#3abff8] focus:outline-none"
                placeholder="Message"
                rows={4}
              />
            </div>
            <div className="text-center ">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-md bg-black px-4 py-2 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Send Message <FiSend className="mr-2" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
          <div className="mb-4 flex items-center">
            <FiMapPin className="mr-2 text-gray-600" />
            <p>1234 Main Street, City, Country</p>
          </div>
          <div className="mb-4 flex items-center">
            <FiMail className="mr-2 text-gray-600" />
            <a
              href="mailto:info@example.com"
              className="text-[#3abff8] hover:underline"
            >
              mdsajalali2020@gmail.com
            </a>
          </div>
          <div className="mb-4 flex items-center">
            <FiPhone className="mr-2 text-gray-600" />
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
