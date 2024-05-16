import Link from "next/link";
import styles from "./footer.module.css";
import { FaMailchimp, FaPhone } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className={`${styles.wrapper} mt-5 bg-dark text-light p-2`}>
            <div className="container  d-lg-flex justify-content-between align-items-center">
                <p className="fw-bold mt-3">
                    AYEN &copy;
                </p>
                <div>
                    <FaMailchimp/> 
                    <Link className="link ms-2 fw-bold text-info" href={`mailto:africayouthsinenergynetwork@gmail.com?subject=Feedback&body=Hello great AYEN group, `}>
                      africayouthsinenergynetwork@gmail.com
                    </Link>
                </div>
                <div className="my-2"> 
                    <FaPhone/> <Link className=" text-white fw-bold" href={`tel:+2349033886949`}> +234 903 3886949</Link>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;