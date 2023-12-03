import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <nav className="bg-softBg border-b-2 border-gray-200">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto py-4 px-8">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="Flowbite Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto h-screen md:h-auto"
          id="navbar-default"
        >
          <ul className="flex flex-col items-center p-4 md:p-0 mt-16 rounded-lg md:flex-row md:space-x-8 space-y-8 md:space-y-0 md:mt-0 bg-transparent">
            <li>
              <a
                href="#explore"
                className="block py-2 px-3 text-md text-gray-700 hover:text-blue-700 font-medium text-center transition duration-300"
                aria-current="page"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 px-3 text-md text-gray-700 hover:text-blue-700 font-medium text-center transition duration-300"
                aria-current="page"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 px-3 text-md text-gray-700 hover:text-blue-700 font-medium text-center transition duration-300"
                aria-current="page"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="block py-2 px-3 text-md text-gray-700 hover:text-blue-700 font-medium text-center transition duration-300"
                aria-current="page"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="md:bg-white md:hover:bg-white border-[1px] text-lg md:border-transparent md:hover:border-gray-500 transition duration-500 text-white md:text-gray-700 font-bold py-3 px-6 rounded-2xl bg-violet-500 hover:bg-violet-600"
                aria-current="page"
              >
                Buy Template
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
