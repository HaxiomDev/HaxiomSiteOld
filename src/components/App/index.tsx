import AboutUsSection from "../AboutUsSection";
import BackgroundCircle from "../BackgroundCircle";
import IntroSection from "../IntroSection";
import NavBar from "../NavBar";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <BackgroundCircle />

      <div className="content">
        <IntroSection />
        <AboutUsSection />
      </div>
    </div>
  );
}
