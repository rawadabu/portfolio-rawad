import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm rounded-full bg-fuchsia-700	 font-playpen uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:bg-fuchsia-500 focus:bg-fuchsia-500 focus:outline-none focus:ring focus:ring-fuchsia-500 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    project:
      "inline-block text-lg font-bold rounded-full hover:text-xl hover:text-fuchsia-300 font-playpen uppercase tracking-wide transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-fuchsia-500 underline",
    navbar:
      base +
      " px-4 py-2 md:px-5 md:py-2.5 text-s hover:bg-white hover:text-fuchsia-700 border-fuchsia-700 bg-black border-b-2",
    secondary:
      "inline-block text-sm border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
