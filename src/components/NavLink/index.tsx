import "./navlink.css";

type NavLinkProps = {
  // The name of the link
  name: string;

  // The last page the user clicked
  lastSelected: string | null;

  // The ref to the page to scroll to on click
  ref: React.RefObject<HTMLDivElement>;
};

export default function NavLink(props: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    props.ref.current?.scrollIntoView();
  };

  return (
    <a
      onClick={handleClick}
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
