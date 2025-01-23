import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 p-4 shadow-md">
      <ul className="flex justify-center gap-6 text-white font-bold text-lg">
        <li className="hover:text-yellow-300 transition duration-300">
          <Link href="/summer">Summer</Link>
        </li>
        <li className="hover:text-blue-300 transition duration-300">
          <Link href="/winter">Winter</Link>
        </li>
        <li className="hover:text-orange-400 transition duration-300">
          <Link href="/autumn">Autumn</Link>
        </li>
        <li className="hover:text-green-300 transition duration-300">
          <Link href="/spring">Spring</Link>
        </li>
      </ul>
    </nav>
  );
}

