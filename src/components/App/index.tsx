import BackgroundCircle from "../BackgroundCircle";
import IntroSection from "../IntroSection";
import NavBar from "../NavBar";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <BackgroundCircle />

      <IntroSection />
    </div>
  );
}
