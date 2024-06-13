"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const liComponents = [
  { id: 1, name: "Home" },
  { id: 2, name: "Services" },
  { id: 3, name: "Contact Us" },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDeatails, setuserDeatails] = useState()
  const router = useRouter();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await fetch("/api/users/info", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        if (response.ok) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsLoggedIn(false);
      }
    };

    getUserDetails();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch("/api/users/logout");

      if (response.ok) {
        setIsLoggedIn(false);
        alert("You have been logged out");
        router.push('/');
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="sticky top-0 bg-[#C2DDE8] z-10">
      <div className="flex justify-between mx-10 p-3 items-center">
        <h3>LOGO</h3>
        <ul className="flex justify-around w-[40%]">
          {liComponents.map((li) => (
            <li key={li.id} className="hover:text-sky-500 cursor-pointer font-semibold">
              {li.name}
            </li>
          ))}
          {isLoggedIn && (
            <li className="hover:text-sky-500 cursor-pointer font-semibold">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <Button variant="secondary" onClick={logout}>
              Log Out
            </Button>
          ) : (
            <>
              <Link href="/signup">
                <Button variant="secondary">Sign Up</Button>
              </Link>
              <Link href="/signin">
                <Button variant="secondary">Sign In</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
