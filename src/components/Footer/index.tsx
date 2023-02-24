import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">&copy; Copyright Haxiom Inc {currentYear}</div>
  );
}
