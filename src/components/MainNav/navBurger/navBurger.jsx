import "../../../css/style.css";

function NavBurger({ toggleVisibility, handleKeyDown }) {
  return (
    <div
      onClick={toggleVisibility}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="nav__burger burger"
    >
      <span className="burger__line" />
      <span className="burger__line" />
      <span className="burger__line" />
    </div>
  );
}

export default NavBurger;
