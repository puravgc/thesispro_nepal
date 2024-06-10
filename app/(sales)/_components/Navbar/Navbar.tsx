import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const liComponents = [
    {
        id: 1, 
        name: "Home", 
    }, {
        id: 2, 
        name: "Services", 
    }, 
    {
        id: 3, 
        name: "Contact Us"
    }
]

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between mx-10 p-3 items-center">
       <h3>LOGO</h3>
        <ul className="flex justify-around w-[50%]">
         {
            liComponents.map((li) => (
               <li key={li.id} className="hover:text-sky-500 cursor-pointer ">
                    {li.name}
               </li>
            ))
         }
        </ul>
        <div className="flex gap-4 ">
          <Button variant="secondary">Sign Up</Button>
          <Button variant="secondary">Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
