import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css"
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className={`${styles.container} d-flex justify-content-between align-items-center container`}>
                <div className={``}>
                    <Link className="navbar-brand fw-bold" href="/">
                        <Image src={'/ayenlogo.png'} width={70} height={50} alt="AYEN logo"/>
                        AYEN
                    </Link>
                </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Links/>
                
                <div className={`${styles.phone}`}>
                        <FaPhone className="text-white"/> <Link className=" text-white fw-bold" href={`tel:+2349033886949`}> +234 903 3886949</Link>
                </div>

            </div>
            </nav>
        </div>
    );
}

export default Navbar;