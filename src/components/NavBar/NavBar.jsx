import Logo from "../Logo/Logo";
import Numresult from "../NumResult/Numresult";
import Search from "../Search/Search";

const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <Numresult movies={movies} />
    </nav>
  );
};

export default NavBar;
