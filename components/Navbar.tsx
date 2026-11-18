import { Button } from "./Button";

export default function Navbar() {
  return (
    <header className="nav">
      <a href="/" className="brand" aria-label="Project Flow home">
        <span className="brand-mark">PF</span>
        <span className="brand-name">Project Flow</span>
      </a>

      <a href="#how-it-works" className="nav-link">
        How it works
      </a>

      <Button size="sm">Continue with Google</Button>
    </header>
  );
}
