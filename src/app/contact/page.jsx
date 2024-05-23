import Image from "next/image";
import styles from "./contact.module.css"
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
    title: 'Contact AYEN - Connect with Us to Empower Youth in the Energy Sector',
    description: 'Get in touch with AYEN to learn more about our mission, programs, and how you can get involved. Reach out to us for inquiries, partnerships, and support as we work together to inspire and empower the next generation in the energy sector.',
  }
const page = () => {
    return (
        <div className={`container ${styles.container}`}>
            <section className="d-lg-flex align-items-center shadow shadow-1 p-md-5 p-3 rounded-4">
                <div className={styles.body}>
                    <h1 className="fw-bold">
                        Contact Us
                    </h1>
                    <div>
                        <Link href={`mailto:africayouthsinenergynetwork@gmail.com?subject=Feedback&body=Hello great AYEN group, `} className="m-5">
                            <div className="text-center p-3 rounded-3 shadow shadow-1 fw-bold bg-dark text-white">
                                <IoMdMail /> 
                                <span className="d-none d-md-block">africayouthsinenergynetwork@gmail.com</span>
                                <span className="d-md-none ms-2">Send us a mail</span>
                            </div>
                        </Link>
                        <Link href="tel:+2349033886949" className="link m-5">
                            <div className="text-center p-3 rounded-3 shadow shadow-1 fw-bold">
                                <FaPhone/> <span className="ms-2">Call us on: +234 903 3886949</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={`${styles.imgContainer}`}>
                    <Image src={`/africa.png`} fill alt="A map of Africa which shows the organization is based in Africa"/>
                </div>
            </section>

        </div>
    );
}

export default page;