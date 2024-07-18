"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import VENTANA from '@/app/assets/ventana.png';

const Header = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="text-white absolute top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-8 py-4">
            <div className="text-3xl font-bold">
                <Link href="/">
                    <Image
                        src={VENTANA}
                        alt="Ventana Logo"
                        layout="intrinsic" 
                        className="w-32 h-auto md:w-40 lg:w-48" 
                    />
                </Link>
            </div>
            
            <div className="hidden md:flex gap-5 text-base">
                <Link href="/">Home</Link>
                <Link href="/product">Product</Link>
                <Link href="/company">Company</Link>
                <Link href="/contact">Contact</Link>
                </div>

            <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                    <XMarkIcon className="h-8 w-8" />
                ) : (
                    <Bars3Icon className="h-8 w-8" />
                )}
            </button>
            </div>
        </div>

        {isOpen && (
            <div className="md:hidden flex flex-col gap-2 px-8 pb-4">
                <Link href="/" onClick={toggleMenu}>Home</Link>
                <Link href="/product" onClick={toggleMenu}>Product</Link>
                <Link href="/company" onClick={toggleMenu}>Company</Link>
                <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
        )}
        </header>
    );
};

export default Header;
