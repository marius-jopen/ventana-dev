"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Outfit } from 'next/font/google'
import Header from "../app/components/header"; // Ensure correct import path
import HeaderMobile from "../app/components/header-mobile"; // Ensure correct import path
import '../app/styles.css'; // Ensure correct import path
import Head from 'next/head';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-outfit',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Detect route changes


  useEffect(() => {
    const slices = document.querySelectorAll("section[data-slice]");

    let lastKnownSlice: string | null = null;

    const updateHeaderColor = (sliceClass: string | null) => {
      if (sliceClass !== lastKnownSlice) {
        // console.log("Updating header color to:", sliceClass);
        lastKnownSlice = sliceClass;
        const event = new CustomEvent("headerColorChange", { detail: { color: sliceClass } });
        window.dispatchEvent(event);
      }
    };

    const checkSlicesPosition = () => {
      slices.forEach(slice => {
        const rect = slice.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) { // Adjust this value based on header height
          const sliceClass = slice.getAttribute("data-slice");
          // console.log("Slice at top:", sliceClass);
          updateHeaderColor(sliceClass);
        }
      });
    };

    const handleRouteChange = () => {
      setTimeout(checkSlicesPosition, 100); // Delay to ensure the new page has rendered
    };

    window.addEventListener("scroll", checkSlicesPosition);
    window.addEventListener("load", checkSlicesPosition);
    window.addEventListener("resize", checkSlicesPosition);
    handleRouteChange(); // Check position on initial render and on route change

    return () => {
      window.removeEventListener("scroll", checkSlicesPosition);
      window.removeEventListener("load", checkSlicesPosition);
      window.removeEventListener("resize", checkSlicesPosition);
    };
  }, [pathname]); // Depend on pathname to detect route changes

  return (
    <html lang="en">
      <Head>
        <title>VENTANA</title>
        <meta name="description" content="Ventana – More than a display. A window to the future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${outfit.variable} font-sans bg-black antialiased w-full overflow-x-hidden`} >
        <Header />
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
