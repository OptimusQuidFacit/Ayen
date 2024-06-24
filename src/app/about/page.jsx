import Image from "next/image";
import styles from "./page.module.css"
import Personnel from "@/components/personnel/Personnel";
import { intro, keyPersonnel } from "@/data/about";

export const metadata = {
    title: 'About AYEN - Meet Our Team Driving Youth Innovation in the Energy Sector',
    description: 'Learn about AYEN\'s mission to empower youth in the energy sector. Discover our key personnel and how their expertise is shaping the future of sustainable energy. Join us in fostering innovation and leadership among the next generation.',
  }
const page = () => {

    return (
        <div className="container">
            <header>
                <div className={` `}>
                    <div className={`${styles.imgContainer} border border-2`}>
                        <Image className={`rounded-3  ${styles.img}`} src='/ayenphoto5.jpg' fill alt="A photo of a lady from the Ayen group"/>
                        <div className={`${styles.textContainer}`}>
                            <div className={`${styles.aboutTitle}`}>
                                <h1 className={styles.headingText}>
                                    About Us
                                </h1>
                            </div>
                            <div className={`${styles.aboutText} px-lg-3`}>
                                <p className="bg-light p-3 rounded-3 text-primary">
                                    {intro}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-5" id="keypersonnel">
                <h2 className="fw-bold text-center">
                    {keyPersonnel.heading}
                </h2>
                <p className="">
                    {keyPersonnel.intro}
                </p>
                <Personnel/>

            </section>
        </div>
    );
}

export default page;