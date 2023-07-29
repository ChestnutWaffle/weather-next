import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-700 flex justify-between text-slate-300 py-4 px-12 shadow-lg">
      <div>
        <ul className="flex flex-row text-xl font-bold">
          <li>
            <Link href="/" className="px-2 py-1 hover:bg-gray-600 rounded-xl">
              Weather
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row gap-2 font-medium">
          <li>
            <Link
              href={"#hourly"}
              className="px-2 py-1 hover:bg-gray-600 rounded-xl"
            >
              Hourly
            </Link>
          </li>
          <li>
            <Link
              href={"#daily"}
              className="px-2 py-1 hover:bg-gray-600 rounded-xl"
            >
              Daily
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
