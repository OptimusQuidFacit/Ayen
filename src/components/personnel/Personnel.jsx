import Image from "next/image";
import styles from './personnel.module.css'
import { keyPersonnel } from "@/data/about";
const Personnel = () => {
    
    return (
        <div>
            <div className={`${styles.wrapper} `}>
                {
                    keyPersonnel.persons.map(person=>
                    <div key={person.name} className={`${person.name==="Promise Nwogu" && styles.lead} my-3 mx-1 shadow shadow-1 p-3 rounded-2`}>
                        <div className={`${styles.imgContainer} mb-3`}>
                            <Image className={`rounded-5 ${styles.img}`} src={person.photo} fill alt ={`A photo of ${person.name} and is the ${person.position} at AYEN`}   />
                        </div>
                        <h3 className="text-center fw-bold">
                            {person.name}
                        </h3>
                        <p className="text-center fw-bold text-primary">
                            {person.position}
                        </p>
                        <p>
                            {person.text}
                        </p>

                    </div>
                    )
                }
            </div>
        </div>
    );
}

export default Personnel;