import { useRef } from "react";

import AboutUsSection from "../components/AboutUsSection";
import BackgroundCircle from "../components/BackgroundCircle";
import IntroSection from "../components/IntroSection";
import NavBar from "../components/NavBar";

export default function HomeRoute() {
  const homeLinkRef = useRef<HTMLDivElement>(null);
  const aboutLinkRef = useRef<HTMLDivElement>(null);

  const links = [
    {
      name: "Home",
      onClick: () => {
        homeLinkRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    },
    {
      name: "About",
      onClick: () => {
        aboutLinkRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  ];

  return (
    <>
      <NavBar links={links} />
      <BackgroundCircle />

      <div className="content">
        <div ref={homeLinkRef}>
          <IntroSection />
        </div>

        <div ref={aboutLinkRef}>
          <AboutUsSection />
        </div>
      </div>
    </>
  );
}
