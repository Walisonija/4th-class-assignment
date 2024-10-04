// app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Country Info</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/countries/usa" className="text-gray-300 hover:text-white">
            USA
          </Link>
          <Link href="/countries/india" className="text-gray-300 hover:text-white">
            India
          </Link>
          <Link href="/countries/germany" className="text-gray-300 hover:text-white">
            Germany
          </Link>
          <Link href="/countries/canada" className="text-gray-300 hover:text-white">
            Canada
          </Link>
          <Link href="/countries/australia" className="text-gray-300 hover:text-white">
            Australia
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
