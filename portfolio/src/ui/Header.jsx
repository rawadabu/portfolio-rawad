import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="sticky top-0 px-4 py-3 uppercase sm:px-6 shadow-lg font-playpen flex justify-between items-center bg-backGround text-textColor z-10">
      <div className="flex items-center">
        <img
          src="https://zukttyxavjmehdcxbaty.supabase.co/storage/v1/object/public/interested/Rawad.png"
          alt="Logo"
          className="mr-2 h-14 w-14 hover:animate-bounce"
        />
        <Link to="/" className="tracking-widest">
          Rawad Abu-Saleh
        </Link>
      </div>
      <div className="flex justify-end gap-5">
        <Button type="navbar" to="projects-view">
          Projects
        </Button>
        <Button type="navbar">Contact</Button>
      </div>
    </header>
  );
}

export default Header;
