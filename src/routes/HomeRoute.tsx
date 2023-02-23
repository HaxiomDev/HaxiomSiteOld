import { forwardRef, useRef } from "react";
import AboutUsSection from "../components/AboutUsSection";
import BackgroundCircle from "../components/BackgroundCircle";
import IntroSection from "../components/IntroSection";
import NavBar from "../components/NavBar";

const IntroSectionWithRef = forwardRef((props, ref: any) => {
  return (
    <div ref={ref}>
      <IntroSection {...props} />
    </div>
  );
});

const AboutUsSectionWithRef = forwardRef((props, ref: any) => {
  return (
    <div ref={ref}>
      <AboutUsSection {...props} />
    </div>
  );
});

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
        <IntroSectionWithRef ref={homeLinkRef} />
        <AboutUsSectionWithRef ref={aboutLinkRef} />
      </div>
    </>
  );
}
