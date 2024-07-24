"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = (): JSX.Element => {
  const [headerColor, setHeaderColor] = useState("text-black");

  useEffect(() => {
    const handleColorChange = (event: CustomEvent) => {
      console.log("Header color change event received:", event.detail.color);
      setHeaderColor(event.detail.color === "style-white" ? "text-black" : "text-white");
    };

    window.addEventListener("headerColorChange", handleColorChange);

    return () => {
      window.removeEventListener("headerColorChange", handleColorChange);
    };
  }, []);

  return (
    <div
      className={`flex justify-between top-0 left-0 w-full fixed z-50 px-8 pt-4 ${headerColor} transition-colors duration-400`}
    >
      <div>Ventana</div>
      <div className="flex gap-4 text-style-16">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/company">Company</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
