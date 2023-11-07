import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-sky-100 bg-primary text-secondary px-4 py-3 uppercase sm:px-6 shadow-lg font-playpen">
      <Link to="/" className="tracking-widest">
        Rawad Abu-Saleh
      </Link>
      <button>Contact</button>
    </header>
  );
}

export default Header;
