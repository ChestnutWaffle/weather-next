import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-700 flex justify-between text-slate-300 py-4 px-6 md:px-12 shadow-lg">
      <div>
        <ul className="flex flex-row text-xl font-bold">
          <li>
            <Link
              href="/"
              className="px-2 py-1 hover:bg-gray-600 rounded-xl focus:outline-none focus:bg-gray-600"
            >
              Weather
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex flex-row gap-2 font-medium">
          <li>
            <Link
              href={"#hourly"}
              className="px-2 py-1 hover:bg-gray-600 rounded-xl focus:outline-none focus:bg-gray-600"
            >
              Hourly
            </Link>
          </li>
          <li>
            <Link
              href={"#daily"}
              className="px-2 py-1 hover:bg-gray-600 rounded-xl focus:outline-none focus:bg-gray-600"
            >
              Daily
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
