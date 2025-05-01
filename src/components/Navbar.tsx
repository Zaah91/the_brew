'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center px-10 py-4 bg-[#FAF0E6] text-[18px]">
      <Link href="/" className="mr-4 text-black">Home</Link>
      <Link href="/shop" className="mr-4 text-black">Shop</Link>
      {/* <Link href="/nonAlcohol" className="mr-4 text-black">Non alcoholic</Link> */}
      <Link href="/checkout" className="text-black ml-auto">Cart</Link>
    </nav>
  );
};

export default Navbar;