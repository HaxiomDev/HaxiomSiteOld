import { useState } from "react";
import NavLink from "../NavLink";
import "./navlinks.css";

type NavLinksProps = {
  // links to display
  links: {
    name: string;
    onClick: () => void;
  }[];
};

export default function NavLinks(props: NavLinksProps) {
  const [lastSelected, setLastSelected] = useState("");

  return (
    <div className="nav-links">
      {props.links.map((link, key) => (
        <NavLink
          key={key}
          name={link.name}
          onClick={link.onClick}
          lastSelected={lastSelected}
          setLastSelected={setLastSelected}
        />
      ))}
    </div>
  );
}
