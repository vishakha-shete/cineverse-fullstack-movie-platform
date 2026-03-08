import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-black text-gray-200 px-6 py-4 flex items-center justify-between h-20 text-sm md:text-[15px] font-medium shadow-md relative">

            {/* Logo */}
            <img
                src={Logo}
                alt="logo"
                className="w-50 cursor-pointer brightness-125"
            />

            {/* Desktop Navigation */}
            <ul className="hidden xl:flex items-center space-x-6 text-lg">
                <li className="hover:text-red-400 cursor-pointer transition">Home</li>
                <li className="hover:text-red-400 cursor-pointer transition">Anime</li>
                <li className="hover:text-red-400 cursor-pointer transition">Movies</li>
                <li className="hover:text-red-400 cursor-pointer transition">Popular</li>
                <li className="hover:text-red-400 cursor-pointer transition">TV Shows</li>
                <li className="hover:text-red-400 cursor-pointer transition">Favorites</li>
            </ul>

            {/* Right Section */}
            <div className="flex items-center space-x-4">

                {/* Search */}
                <div className="relative hidden md:inline-flex items-center">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="bg-[#333333] px-4 py-2 rounded-full min-w-56 pr-10 outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <Search className="absolute right-3 w-5 h-5 text-gray-400" />
                </div>

                {/* CTA Button */}
                <button className="hidden md:block bg-[#e50914] px-5 py-2 text-white rounded-md hover:bg-red-600 transition cursor-pointer">
                    Movie Picks
                </button>

                {/* Login Button */}
                <button className="hidden md:block border border-[#333333] px-4 py-2 rounded-md hover:border-red-500 transition cursor-pointer">
                    Sign In
                </button>

                {/* Mobile Menu Icon */}
                <div className="xl:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                    {open ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 xl:hidden">
                    <ul className="flex flex-col items-center space-y-6 py-6 text-lg">
                        <li className="hover:text-red-400 cursor-pointer">Home</li>
                        <li className="hover:text-red-400 cursor-pointer">Anime</li>
                        <li className="hover:text-red-400 cursor-pointer">Movies</li>
                        <li className="hover:text-red-400 cursor-pointer">Popular</li>
                        <li className="hover:text-red-400 cursor-pointer">TV Shows</li>
                        <li className="hover:text-red-400 cursor-pointer">Favorites</li>

                        <button className="bg-[#e50914] px-6 py-2 rounded-md">
                            Movie Picks
                        </button>

                        <button className="border border-[#333333] px-6 py-2 rounded-md">
                            Sign In
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;