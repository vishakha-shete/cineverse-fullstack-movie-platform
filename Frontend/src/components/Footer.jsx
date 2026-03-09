import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-[#737373] px-6 md:px-16 mt-20 border-t border-[#222]">

      {/* Top Section */}
      <div className="py-12 max-w-6xl mx-auto">
        <p className="text-lg mb-3 text-gray-400">
          Developed by <span className="text-white font-medium">Vishakha Shete</span>
        </p>

        <p className="text-sm text-gray-500 max-w-xl">
          Explore trending movies, TV shows and entertainment content.
          Discover trailers, ratings, and your next favorite movie.
        </p>
      </div>

      {/* Contact */}
      <p className="pb-6 text-sm text-gray-400">
        Questions? Contact us.
      </p>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm pb-10 max-w-5xl">

        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer">FAQ</li>
          <li className="hover:text-white cursor-pointer">Investor Relations</li>
          <li className="hover:text-white cursor-pointer">Privacy</li>
          <li className="hover:text-white cursor-pointer">Speed Test</li>
        </ul>

        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer">Help Center</li>
          <li className="hover:text-white cursor-pointer">Jobs</li>
          <li className="hover:text-white cursor-pointer">Cookie Preferences</li>
          <li className="hover:text-white cursor-pointer">Legal Notices</li>
        </ul>

        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer">Account</li>
          <li className="hover:text-white cursor-pointer">Ways to Watch</li>
          <li className="hover:text-white cursor-pointer">Corporate Information</li>
          <li className="hover:text-white cursor-pointer">Only on CineVerse</li>
        </ul>

        <ul className="space-y-2">
          <li className="hover:text-white cursor-pointer">Media Center</li>
          <li className="hover:text-white cursor-pointer">Terms of Use</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#222] py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} CineVerse. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;