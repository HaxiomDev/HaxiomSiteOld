import "./navlink.css";

type NavLinkProps = {
  // The name of the link
  name: string;

  // The last page the user clicked
  lastSelected: string | null;

  // What to do when the link is clicked
  onClick: () => void;
};

export default function NavLink(props: NavLinkProps) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
      href="#"
      className={`navlink ${
        props.lastSelected === props.name
          ? "navlink-selected"
          : "underline-on-hover"
      }`}
    >
      {props.name}
    </a>
  );
}
