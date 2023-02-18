import "./navlink.css";

type NavLinkProps = {
  // The name of the link
  name: string;

  // The last page the user clicked
  lastSelected: string | null;

  // What to do when the link is clicked
  onClick: () => void;

  // Function to set the last page the user clicked
  setLastSelected: (name: string) => void;
};

export default function NavLink(props: NavLinkProps) {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        props.setLastSelected(props.name);

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
