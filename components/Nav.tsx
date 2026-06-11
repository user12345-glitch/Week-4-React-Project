import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";
export default function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-list">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/async-us-data">
            Country API Dashboard
          </Link>
        </li>
        
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
          <li>
          <AuthButton />
        </li>
        <li>
          <ThemeToggle />
          </li>
      </ul>
    </nav>
  );
}