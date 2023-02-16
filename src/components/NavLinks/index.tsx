import NavLink from "../NavLink";
import "./navlinks.css";

type NavLinksProps = {
  // The last page the user clicked
  lastSelected: string | null;

  // links to display
  links: {
    name: string;
    ref: any | React.RefObject<HTMLDivElement>;
  }[];
};

export default function NavLinks(props: NavLinksProps) {
  return (
    <div className="nav-links">
      {props.links.map((link, key) => (
        <NavLink
          key={key}
          name={link.name}
          ref={link.ref}
          lastSelected={props.lastSelected}
        />
      ))}
    </div>
  );
}
