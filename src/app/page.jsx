import Image from "next/image";
import styles from "./home.module.css"
import Values from "@/components/values/Values";
import Gallery from "@/components/Gallery/Gallery";


export const metadata = {
  title: 'AYEN - Empowering Youths to Revolutionize the Energy Sector',
  description: 'Join AYEN, a dynamic NGO dedicated to uniting and empowering young minds to innovate and make a lasting impact in the energy sector. Discover how we are fostering the next generation of energy leaders and driving sustainable change.',
}
const Home = () => {
  const images = [
    {
      src: "/ayenphoto1.jpg",
      alt: "Photo depicting of team members at Ayen Conference"
    },
    {
      src: "/ayenphoto2.jpg",
      alt: "Photo of team members at Ayen conference both holding a banner"
    },
    {
      src: "/ayenphoto3.jpg",
      alt: "Photo of two members of the AYEN group"
    },
  ]
  return (

    <div className={`${styles.wrapper} container`}>
      <header>
        {/* <div className={`${styles.imgContainer}`}> */}

        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-interval="3000" data-bs-ride= "carousel">
          <div className="carousel-inner">
            {
              images.map((image, index)=>
            <div key={image.src} className={`carousel-item ${styles.imgContainer} ${index===0&&'active'}`}>
              <Image className={`rounded-3 d-block w-100 ${styles.img}`} src={image.src} fill alt={image.alt}/>
              {/* <Image className={`rounded-3 ${styles.img}`} src='/ayenphoto1.jpg' fill alt="Photo depicting energy"/> */}
              <div className={`${styles.textContainer}`}>
              {/* <div className={styles.logoContainer}>
                <Image fill src={`/ayenlogo.png`} alt="AYEN logo"/>
              </div> */}
                <h1 className={`${styles.heading} fw-bold text-light text-center`}>
                  African Youths in Energy Network
                </h1>
              </div>
            </div>
              )
            }     
          </div>
        </div>
      </header>

      <section id="mission">

      <section className={`${styles.row} mt-5`}>
        <div className={`${styles.leftMission}`}>   
          <h2 className="fw-bold">
              Mission
          </h2>
          <p>
            The AYEN Organization mission is to
            actively promote and support the voices,
            ideas and actions of youth in the shaping
            of the energy future of the African
            continent. This is achieved by providing a
            platform for youth to come together and
            explore innovative solutions, build
            capacity, and foster collaboration and
            social responsibility. Through this, AYEN
            seeks to empower African youths and
            ultimately create a sustainable energy
            future.
          </p>
        </div>
        <div className={`${styles.rightMission}`}>
         
            <Image className={`rounded-4 ${styles.bodyimg}`} src='/audience.jpg' fill alt="An image a conference in the AYEN group held in UNIPORT"/>
          
        </div>
      </section>

      <section className={`${styles.row} mt-5`}>
        <div className={`${styles.leftVision} mb-3`}>   
            <Image className={`rounded-4 ${styles.bodyimg}`} src='/3MenAndAwards.jpg' fill alt="A photo of team members in the AYEN group highlighting their goals"/>
        </div>
        <div className={`${styles.rightVision}`}>
         
          <h2 className="fw-bold">
              Vision
          </h2>
          <p>
            We seek to empower Youths and place
            them at the heart of the energy
            transition. Through creative initiatives and
            innovative projects, the organization aims
            to provide an opportunity for young
            people to actively participate in the shift
            towards a more sustainable energy
            system. With its focus on youth
            engagement, AYEN is committed to
            enabling a future where young people are
            supported, informed and empowered to
            become energy leaders and innovators.
          </p>
        </div>
      </section>
      </section>

      <section className="mt-5" id="values">
        <div>
          <h2 className="fw-bold text-center">
            Our Core Values
          </h2>
          <Values/>
        </div>
      </section>

      <section className="py-5">
        <h2 className="fw-bold">Gallery</h2>
        <Gallery/>
      </section>
      
  </div>
  );
};

export default Home;