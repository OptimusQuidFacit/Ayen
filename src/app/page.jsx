import Image from "next/image";
import styles from "./home.module.css"
import Values from "@/components/values/Values";
import Gallery from "@/components/Gallery/Gallery";
import Head from "next/head";
import { coreValues, heading1, mission, vision } from "@/data/home";


export const metadata = {
  title: 'AYEN - Empowering Youths to Revolutionize the Energy Sector',
  description: 'Join AYEN, a dynamic NGO dedicated to uniting and empowering young minds to innovate and make a lasting impact in the energy sector. Discover how we are fostering the next generation of energy leaders and driving sustainable change.',
}
const Home = () => {
  const images = [
    {
      src: "/ayenphoto.jpg",
      alt: "Colored Photo showing three team members at Ayen Conference"
    },
    {
      src: "/ayenphoto1.jpg",
      alt: "Photo depicting of team members at Ayen Conference"
    },
    {
      src: "/ayenphoto4.jpg",
      alt: "Photo of team members at Ayen conference, all cheerful"
    },
    {
      src: "/ayenphoto3.jpg",
      alt: "Photo of two members of the AYEN group"
    },
  ]
  const partners= [
    {
      img: '/energyLeadersAssociation.jpeg',
      name: 'Energy Leaders Association'
    },
    {
      img: '/shortlist.png',
      name: 'Shortlist'
    },
    {
      img: '/SPEUnilag.jpeg',
      name: 'SPE Unilag'
    },
    {
      img: '/AhmaduBello.jpeg',
      name: 'SPE Ahmadu Bello'
    },
    {
      img: '/SPEUniport.jpeg',
      name: 'SPE Uniport'
    },
    {
      img: '/studentEnergy.jpeg',
      name: 'Student Energy'
    },
    {
      img: '/TafawaBelewa.jpeg',
      name: 'SPE Abubakar Tafawa Belewa'
    },
    {
      img: '/SwitchEnergy.jpeg',
      name: 'Switch Energy Aliance'
    },
  ]
  return (
    <>
        <Head>
          <meta name="google-site-verification" content="ESCA8ZADmoxuz6ctenSWsEVYRG-jXoxP1SY1hBGSzrU" />
        </Head>
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
                      <span className={styles.african}>
                        {heading1.substring(0, heading1.indexOf(" "))}
                      </span>
                      
                      <span className={styles.othertext}>
                      {heading1.substring(heading1.indexOf(" "))}
                      </span>

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
                  {mission.heading}
              </h2>
              <p>
                {mission.text}
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
                  {vision.heading}
              </h2>
              <p>
                {vision.text}
              </p>
            </div>
          </section>
          </section>

          <section className="mt-5" id="values">
            <div>
              <h2 className="fw-bold text-center">
                {coreValues.heading}
              </h2>
              <Values/>
            </div>
          </section>

          <section className="py-5">
            <h2 className="fw-bold">Gallery</h2>
            <Gallery/>
          </section>

          <section className="p-lg-5 p-2">
                <h2 className="fw-bold">
                  Partners
                </h2>
                <div className={`${styles.partners}`}>
                  {
                    partners.map((partner, index)=>
                      <div key={index} className={`mt-2 ${styles.partnerImgContainer}`}>
                        <Image style={{objectFit:"contain"}} fill src={partner.img} alt={`${partner.name}'s logo`}/>
                      </div>
                    )
                  }

                </div>
          </section>
          
      </div>
    </>
  );
};

export default Home;