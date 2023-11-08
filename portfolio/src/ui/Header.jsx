import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 border-b-2 px-4 py-3 uppercase sm:px-6 shadow-lg font-playpen flex justify-between items-center bg-backGround text-textColor z-10">
      <Link to="/" className="tracking-widest">
        Rawad Abu-Saleh
      </Link>
      <div className="flex justify-end gap-5">
        <button>About</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </header>
  );
}

export default Header;
