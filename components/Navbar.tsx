"use client";
import React, { useState } from "react";
import logo from "@/public/logo_RM.png";
import Image from "next/image";
import User from "@/public/user.png";
import Link from "next/link";
import { FiUser, FiEdit, FiGift, FiMail, FiInfo, FiLogOut } from "react-icons/fi"; // Import icons

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link href="/feedback" className="text-gray-700 hover:underline">
          Feedback
        </Link>
        <Link href="/contactUs" className="text-gray-700 hover:underline">
          Contact Us
        </Link>
        <Link href="/about" className="text-gray-700 hover:underline">
          About Us
        </Link>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gray-300 rounded-full">
              <Image src={User} alt="Profile" className="rounded-full" />
            </div>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <a
                href="#profile"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FiUser className="mr-2" />
                Your Profile
              </a>
              <a
                href="#edit-profile"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FiEdit className="mr-2" />
                Edit Profile
              </a>
              <a
                href="#redeem-coins"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FiGift className="mr-2" />
                Redeem Coins
              </a>
              <a
                href="#contact-us"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FiMail className="mr-2" />
                Contact Us
              </a>
              <a
                href="#about-us"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FiInfo className="mr-2" />
                About Us
              </a>
              <a
                href="#logout"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                <FiLogOut className="mr-2" />
                Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
