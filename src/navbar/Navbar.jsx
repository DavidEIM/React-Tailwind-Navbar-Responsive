let logo =
  "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg";

export default function Header() {
  return (
    <div className="bg-(--nav-color) rounded-b-full w-full">
      <div
        className="w-4/5 mx-auto h-12 relative
        md:flex md:justify-between md:items-center md:mx-auto md:w-[90%]"
      >
        <div>
          <img
            src={logo}
            alt=""
            className="h-5
            absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2
            md:static md:translate-none"
          />
        </div>
        <div
          className="absolute right-0 top-0 bg-(--nav-color) h-screen w-2/3 p-5 hidden
        md:static md:bg-inherit md:size-auto md:p-0 md:block"
          id="menu"
        >
          <ul
            className="space-y-3
            md:flex md:space-x-5 md:space-y-0"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
            <li>
              <a href="#">Booking</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2
        md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-7"
          >
            <path
              fill="#fff"
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
