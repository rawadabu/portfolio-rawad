import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="sticky top-0 px-4 py-3 uppercase sm:px-6 shadow-lg font-playpen flex justify-between items-center bg-backGround text-textColor z-10">
      <Link to="/" className="tracking-widest">
        Rawad Abu-Saleh
      </Link>
      <div className="flex justify-end gap-5">
        <Button type="navbar">About</Button>
        <Button type="navbar">Skills</Button>
        <Button type="navbar">Projects</Button>
        <Button type="navbar">Contact</Button>
      </div>
    </header>
  );
}

export default Header;
