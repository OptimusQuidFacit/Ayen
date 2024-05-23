'use client'
import styles from "./slider.module.css"
import {FaHandPointRight } from 'react-icons/fa6';
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const indices=[
        {
            title: `Empowering Youths, Energizing the Future
            `,
            body: `
                At AYEN, we believe that the energy sector's next big innovation can come from the brightest young minds. Our mission is to bring together talented youths from diverse backgrounds and provide them with the resources and mentorship they need to make a meaningful impact in the energy sector.
            `
        },
        {
            title: `Your Support Can Make a Difference

            `,
            body: 
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
        },
    ]
    setTimeout(()=>setCurrentIndex((currentIndex+1)%indices.length), 10000);
    // const setClass= (index)=>{
    //     indices.forEach((item,index)=>{
    //         if(index===currentIndex){
    //             return `styles.`
    //         }
    //     })
    //     setCurrentIndex((currentIndex+1)%indices.length);
    // }
    return (
        <div>
              <div className={`${styles.imgContainer} d-flex`}>
                {
                indices.map((item, index)=>
                <>
                <Image className={`${styles.img} rounded-2`} src={`/speaker.jpg`} fill alt={'Picture of audience listening at AYEN conference'}/>
                <div className={`${styles.textContainer} ${index===currentIndex&&styles.active}`}>
                    <h2 className="fw-bold">
                        {item.title}
                    </h2>
                    <div>
                        {item.body}
                    </div>
                    <Link className={`link btn btn-secondary mt-3`} href={`#`}>
                        Support Us
                    </Link>
                </div>
                </>
            )
                }
            </div>
        </div>
    );
}

export default Slider;