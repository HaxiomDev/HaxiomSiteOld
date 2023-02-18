import NavLink from "../NavLink";
import "./navlinks.css";

type NavLinksProps = {
  // The last page the user clicked
  lastSelected: string | null;

  // links to display
  links: {
    name: string;
    onClick: () => void;
  }[];
};

export default function NavLinks(props: NavLinksProps) {
  return (
    <div className="nav-links">
      {props.links.map((link, key) => (
        <NavLink
          key={key}
          name={link.name}
          onClick={link.onClick}
          lastSelected={props.lastSelected}
        />
      ))}
    </div>
  );
}
