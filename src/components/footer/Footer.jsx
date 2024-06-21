import Link from "next/link";
import styles from "./footer.module.css";
import { FaFacebook, FaLinkedin, FaMailchimp, FaPhone} from "react-icons/fa6";
const Footer = () => {
    return (
        <div className={`${styles.wrapper} mt-5 bg-dark text-light py-2 px-1`}>
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
            <div className="text-center d-flex justify-content-center">
                <div className="icon mx-2 fs-3">
                    <Link className="link text-light" href={`https://www.facebook.com/profile.php?id=100094269768350`}>
                        <FaFacebook/>
                    </Link>
                </div>
                <div className="icon mx-2 fs-3">
                    <Link className="link text-light" href={`https://www.linkedin.com/company/85668098/admin/feed/posts/`}>
                        <FaLinkedin/>
                    </Link>
                </div>
                {/* <div className="icon">
                    <FaTwitter/>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;