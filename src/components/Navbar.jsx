import { FaBell } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
export default function Navbar() {
  return (
    <nav className="bg-[#111015] text-white px-4 py-2 flex flex-row items-center justify-between gap-2  shadow-md rounded-t-2xl">
      {/* Sol Kısım */}
      <div className="flex items-center gap-4 w-auto justify-between">
        <div className="text-white bg-gray-800 py-2 px-2 rounded-full">
          <FiMenu />
        </div>
        <div className="hidden md:block text-white bg-gray-800 py-2 px-2 rounded-full ">
          <FaBell />
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-300">
          {/* Lokasyon ikonu */}
          <MdLocationPin />
          <span>Yalova, Turkiye</span>
        </div>
      </div>

      {/* Arama Kısmı */}
      <div className="w-auto flex justify-center">
        <input
          type="text"
          placeholder="Search City"
          className="lg:w-xl  bg-gray-800 text-white text-sm px-2 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Avatar */}
      <div className="hidden md:flex items-center justify-center w-auto">
        <div className="mx-8">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <img
          src="/images/avatar.jpg"
          alt="Avatar"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>
    </nav>
  );
}
