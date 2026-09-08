"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
        Home
      </Link>

      {" | "}

      <Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>
        About
      </Link>

      {" | "}
          
      <Link href="/projects" className={pathname === "/projects" ? "font-bold" : ""}>
        Projects
        </Link>
          
        {" | "}

      <Link href="/contact" className={pathname === "/contact" ? "font-bold" : ""}>
        Contact
      </Link>
    </nav>
  );
}