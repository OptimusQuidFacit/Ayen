"use client"
import Link from "next/link";
import styles from "./links.module.css"
import { usePathname } from "next/navigation";
const Links = () => {
  const pathname = usePathname()
  console.log(pathname)
    return (
    <div className="collapse navbar-collapse ms-5" id="navbarNavDropdown">
      <ul className="navbar-nav d-flex">
        <li className={ `${styles.col} nav-item me-3`}>
          <Link className={` ${pathname==='/about' ? styles.active: styles.link} nav-link`} href="/about">About Us</Link>
        </li>
        
        <li className="nav-item dropdown me-3">
          <Link className={`${styles.link} nav-link dropdown-toggle`} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Who we are
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" href="/#values">Our Values</Link></li>
            <li><Link className="dropdown-item" href="/#mission">Missions and Goals</Link></li>
            <li><Link className="dropdown-item" href="/about#keypersonnel">Key Personnel</Link></li>
          </ul>
        </li>
        <li className="nav-item me-3">
          <Link className={` ${pathname==='/contact' ? styles.active: styles.link} nav-link`} href="/contact">Contact Us</Link>
        </li>
        <li className="nav-item me-3">
          <Link className={` ${pathname==='/donate' ? styles.active: styles.link} nav-link`} href="/donate">Donate</Link>
        </li>
      </ul>
    </div>
    );
}

export default Links;