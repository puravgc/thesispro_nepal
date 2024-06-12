import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const liComponents = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Services",
  },
  {
    id: 3,
    name: "Contact Us",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#C2DDE8] z-10">
      <div className="flex justify-between mx-10 p-3 items-center">
        <h3>LOGO</h3>
        <ul className="flex justify-around w-[40%]">
          {liComponents.map((li) => (
            <li
              key={li.id}
              className="hover:text-sky-500 cursor-pointer font-semibold"
            >
              {li.name}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ">
          <Link href={"/signup"}>
            <Button variant="secondary">Sign Up</Button>
          </Link>
          <Link href={"/signin"}>
            <Button variant="secondary">Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
