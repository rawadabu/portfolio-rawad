/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "inline-block text-m rounded-full hover:font-bold font-playpen uppercase tracking-wide transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-fuchsia-500 underline";

  if (to === "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
