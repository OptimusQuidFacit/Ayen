import Image from "next/image";
import styles from "./home.module.css"
import Values from "@/components/values/Values";

const Home = () => {
  return (

    <div className="container">
      <header>
        <div className={`${styles.imgContainer}`}>
          <Image className="rounded-3" src='/plug.jpg' fill alt="Photo depicting energy"/>
          <div className={`${styles.textContainer}`}>
            <h1 className={`${styles.heading} fw-bold text-light text-center`}>
              African Youths in Energy Network
            </h1>
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
         
            <Image className="rounded-4" src='/team.jpg' fill alt="A photo of team members in the AYEN group"/>
          
        </div>
      </section>

      <section className={`${styles.row} mt-5`}>
        <div className={`${styles.leftVision}`}>   
            <Image className="rounded-4" src='/3MenAndAwards.jpg' fill alt="A photo of team members in the AYEN group highlighting their goals"/>
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
      
  </div>
  );
};

export default Home;