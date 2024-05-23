import Slider from '@/components/slider/Slider';
import styles from './donate.module.css'


export const metadata = {
    title: 'Support AYEN - Donate to Empower Youth in the Energy Sector',
    description: 'Make a difference by donating to AYEN. Your contribution helps us empower young minds to innovate and lead in the energy sector. Join us in fostering sustainable change and supporting the next generation of energy leaders.',
  }
const page = () => {

    return (
        <div className={`container ${styles.wrapper} py-3`}>
          <Slider/>
            {/* <div>
                <div className={`${styles.section}`}>
                    <h2 className="fw-bold">
                        Your Support Can Make a Difference

                    </h2>
                    <div>
                        As a non-profit organization, we rely on the generosity of individuals and organizations like yours to continue our work. Your donation will help us:
                        <p className={styles.listItem}>                 
                            <FaHandPointRight className='me-1'/>Provide scholarships and training programs for young energy enthusiasts
                        </p> 
                        <p className={styles.listItem}>                      
                            <FaHandPointRight className='me-1'/>Support innovative projects and startups led by young entrepreneurs
                        </p>                      
                        <p className={styles.listItem}>                      
                            <FaHandPointRight className='me-1'/> Organize conferences, workshops, and networking events to connect young professionals with industry leaders
                        </p>                   
 
                    </div>
                    <Link className={`link btn btn-secondary`} href={`#`}>
                        Support Us
                    </Link>
                </div>
            </div> */}
        </div>
    );
}

export default page;