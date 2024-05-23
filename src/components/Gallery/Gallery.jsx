"use client"
import Image from "next/image";
import styles from "./gallery.module.css";
const Gallery = () => {
    const images=[
        {
            img:"/manOnWhite.jpg",
            alt:"Picture taken at AYEN conference in UNIPORT"
        },
        {
            img:"/manAndLadies.jpg",
            alt:"Picture taken at AYEN conference in UNIPORT. A man and two ladies"
        },
        {
            img:"/darkGuy.jpg",
            alt:"Picture taken at AYEN conference in UNIPORT"
        },
        {
            img:"/people.jpg",
            alt:"Picture taken at AYEN conference in UNIPORT. A group of AYEN members"
        },
        {
            img:"/team.jpg",
            alt:"Picture of team members"
        },
    ]
    return (
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner bg-primary p-5">
            { images.map((image, index)=>
            <div key={image.img} className={`carousel-item  ${index===0&&'active'}`}>
                <div className={`${styles.galleryImageContainer}`}>
                    <Image  fill src={image.img} className="rounded-3 d-block w-100" alt={image.alt}/>
                </div>
            </div>
            )
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <div className={styles.btnwrapper}>          
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </div>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <div className={styles.btnwrapper}>          
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </div>
        </button>
</div>
    );
}

export default Gallery;