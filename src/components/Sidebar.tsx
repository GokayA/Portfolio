import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  m-4">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>

        <div className="p-4"> Page content</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-4 ">
          <Image
            src="/avatar.png"
            alt="Profile Image"
            className="rounded-full"
            width={96}
            height={96}
          />
          <h1 className="text-xl font-bold text-center">Gokay Akkus</h1>
          <li className="py-2 gap-2">
            <a href="#" className="btn btn-default">
              Facebook
            </a>
            <a href="#" className="btn btn-default">
              Twitter
            </a>
            <a href="#" className="btn btn-default">
              Instagram
            </a>
            <a href="#" className="btn btn-default">
              LinkedIn
            </a>
            <a href="#" className="btn btn-default">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-gray-400 hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-400 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-400 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-400 hover:text-white"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
