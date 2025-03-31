// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <ul className="flex space-x-8 justify-center text-white font-semibold text-lg">
          <li>
            <Link href="/" passHref>
              Home
            </Link>
          </li>
          <li>
            <Link href="/contato" passHref>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
