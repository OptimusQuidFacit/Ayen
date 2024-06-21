import Image from "next/image";
import styles from "./page.module.css"
import Personnel from "@/components/personnel/Personnel";

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
                                    The African Youth Energy Network (AYEN) is a youth-led and
                                    youth-focused organization that is dedicated to empowering
                                    African youth to become part of the energy transition.
                                    Our mission is to actively promote and support the
                                    voices, ideas, and actions of youth in shaping the energy
                                    future of the African continent.
                                    Targeting all African countries, AYEN looks to provide access
                                    to resources, training, and support for African youth to
                                    become active members of the energy industry. Through
                                    various programs like educational programs, case
                                    competitions, and training. AYEN empowers African youth to
                                    dream big and take on the challenges of the energy sector.
                                    Additionally, AYEN provides a platform for African youth to
                                    share their energy stories and engage in meaningful
                                    dialogue with energy stakeholders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-5" id="keypersonnel">
                <h2 className="fw-bold text-center">
                    Key Personnel
                </h2>
                <p className="">
                    The African Youth Energy Network (AYEN) was founded by a vibrant team of African youths looking to
                    make a differences in the lives of their peers on the continent.

                </p>
                <Personnel/>

            </section>
        </div>
    );
}

export default page;