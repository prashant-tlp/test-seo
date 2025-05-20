import { RedHome } from "@/component/redirectButtons";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul className="flex gap-4 items-center">
        <li>
          <Link href={'/home'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <div className="relative inline-block text-left">
            <div className="group">
              <button type="button"
                className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                Open Menu
                {/* <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
              </svg> */}
              </button>
              <div
                className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <div className="py-1">
                  <Link href="/mango" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mango</Link>
                  <Link href="/fruit/banana" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Banana</Link>
                  <Link href="/fruit/mangobanana" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mango Banana</Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
