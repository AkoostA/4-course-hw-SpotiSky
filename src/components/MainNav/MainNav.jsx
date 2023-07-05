import "../../css/style.css";
import { useState } from "react";
import NavLogo from "./navLogo/navLogo";
import NavMenu from "./navMenu/navMenu";
import NavBurger from "./navBurger/navBurger";

function MainNav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleVisibility();
    }
  };

  return (
    <nav className="main__nav nav">
      <NavLogo />
      <NavBurger toggleVisibility={toggleVisibility} handleKeyDown={handleKeyDown} />
      {visible && <NavMenu />}
    </nav>
  );
}

export default MainNav;
