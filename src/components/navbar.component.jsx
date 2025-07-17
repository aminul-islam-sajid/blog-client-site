import { Link } from "react-router-dom";
import img from "../imgs/logo.png";

const Nevbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-10 ">
        <img src={img} alt="" className="w-full" />
      </Link>

      <div className="absolute left-0 top-full w-full mt-0.5 border-b border-grey">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md-pr-6 rounded-full placeholder:text-dark-grey"
        />
      </div>
    </nav>
  );
};

export default Nevbar;
