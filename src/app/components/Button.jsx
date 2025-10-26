import Link from "next/link";
import React from "react";


export default function Button({ href, children }) {
  return (
    <Link
      href={href}
    className="bg-[#c8a951] text-[15px] text-white font-medium px-8 py-4 border border-transparent transition-all duration-500 hover:bg-white hover:text-[#c8a951] hover:border-[#c8a951]" 
    >
      {children}
    </Link>
  );
}