import { forwardRef, useRef } from "react";
import AboutUsSection from "../AboutUsSection";
import BackgroundCircle from "../BackgroundCircle";
import IntroSection from "../IntroSection";
import NavBar from "../NavBar";
import "./app.css";

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

export default function App() {
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
    <div className="app">
      <NavBar links={links} />
      <BackgroundCircle />

      <div className="content">
        <IntroSectionWithRef ref={homeLinkRef} />
        <AboutUsSectionWithRef ref={aboutLinkRef} />
      </div>
    </div>
  );
}
