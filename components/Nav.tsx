// components/Nav.tsx
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
export default function Nav() {
  return (
    
    <nav>
<ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <ThemeToggle />
</ul>
</nav>
  );
}



