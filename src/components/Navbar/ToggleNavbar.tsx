import { libre_Baskerville } from "@/font/Libre_Baskerville";
import Link from "next/link";
import styles from "./ToggleNavbar.module.css";
const ToggleNavbar = () => {
  return (
    <li className={`${libre_Baskerville.className} relative ${styles.toggle}`}>
      <Link
        className="dark:hover:text-green-400 inline-block pb-4"
        href="/material-educativo"
      >
        Material Edu
      </Link>
      <ul className="absolute top-full w-max bg-slate-900 rounded">
        <li>
          <Link className="block p-2" href="/material-educativo/matematicas">
            Matematicas
          </Link>
        </li>
        <li>
          <Link
            className="block p-2"
            href="/material-educativo/ciencias-naturales"
          >
            Ciencias N
          </Link>
        </li>
        <li>
          <Link
            className="block p-2"
            href="/material-educativo/ciencias-sociales"
          >
            Ciencias S
          </Link>
        </li>
        <li>
          <Link
            className="block p-2"
            href="/material-educativo/comprencion-lectora"
          >
            Comprencion L
          </Link>
        </li>
        <li>
          <Link
            className="block p-2"
            href="/material-educativo/comprencion-de-imagenes"
          >
            Comprencion I
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default ToggleNavbar;
