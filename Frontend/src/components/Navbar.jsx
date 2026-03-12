import { HelpCircle, LogOut, Search, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-hot-toast";


const Navbar = () => {

    const { user, logout } = useAuthStore();
    const [showMenu, setShowMenu] = useState(false);

    const avatarUrl = user
        ? `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
            user.username
        )}`
        : "";

    const handleLogout = async () => {
        const { message } = await logout();
        toast.success(message);
        setShowMenu(false);
    };

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
                {!user ?
                    (<Link to={"/signin"}>
                        <button className="hidden md:block border border-[#333333] px-4 py-2 rounded-md hover:border-red-500 transition cursor-pointer">
                            Sign In
                        </button>
                    </Link>) : (
                        <div className="text-white">
                            <img
                                src={avatarUrl}
                                alt=""
                                className="w-10 h-10 rounded-full border-2 border-[#e50914] 
                                cursor-pointer"
                                onClick={() => setShowMenu(!showMenu)}
                            />


                            {showMenu && <div className="absolute right-0 mt-2 w-64 bg-[#232323] bg-opacity-95 rounded-lg z-50 shadow-lg py-4 px-3 flex flex-col gap-2 border border-[#333333]">
                                <div className="flex flex-col items-center mb-2">
                                    <span className="text-white font-semibold text-base">
                                        {user.username}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {user.email}
                                    </span>
                                </div>

                                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer">
                                    <HelpCircle className="w-5 h-5" />
                                    Help Center
                                </button>

                                <button className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer">
                                    <Settings className="w-5 h-5" />
                                    Settings
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center px-4 py-3 rounded-lg text-white bg-[#181818] hover:bg-[#1d1c1c] gap-3 cursor-pointer"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Log Out
                                </button>



                            </div>}
                        </div>)}


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