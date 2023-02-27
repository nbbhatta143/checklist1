import "./Menu.css";
function HamburgerIcon(props) {
  return (
    <button className="hamburger" onClick={props.onClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  );
}
export default HamburgerIcon;
