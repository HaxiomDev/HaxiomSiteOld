import "./404Route.css";

export default function ErrorRoute() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! You seem to be lost here are some helpful links</p>
      <ul>
        <li>
          <a className="underline-on-hover" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="underline-on-hover" href="/about">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
