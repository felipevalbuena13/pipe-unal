"use client";
import { libre_Baskerville } from "@/font/Libre_Baskerville";
import { useTheme } from "next-themes";
import Link from "next/link";
import ToggleNavbar from "./ToggleNavbar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-full px-24 py-4 flex flex-row justify-between">
      <Link href="/">
        <h2 className={`${libre_Baskerville.className} text-2xl`}>Pipe Unal</h2>
      </Link>
      <nav className="w-auto">
        <ul className="flex flex-row gap-4">
          <ToggleNavbar />
          <li>
            <Link className={libre_Baskerville.className} href="/blog">
              blog
            </Link>
          </li>
          <li>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="system">System</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
