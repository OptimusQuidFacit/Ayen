import Image from "next/image";
import styles from "./project.module.css"
import { Project1, project2 } from "@/data/projects";

export const metadata = {
    title: 'Innovative Energy Projects | Empowering Youth for a Sustainable Future',
    description: 'Discover groundbreaking projects by our NGO, uniting youth to drive innovation in the energy sector. Explore initiatives fostering sustainable energy solutions and empowering the next generation of energy leaders.',
  }
const page = () => {
    
    return (
        <>
            <h1 className="fw-bold text-center">Projects</h1>
            <section className="container">
                <div className="mt-3">
                <div className={`${styles.ayedcontainer} d-md-flex
                align-items-center`}>
                    <div className="full-flex">
                    <h2 className="fw-bold fs-3 text-secondary">
                        {Project1.title}
                    </h2>
                        <p>
                        {Project1.body}
                        </p>
                        
                    </div>
                    <div className={`${styles.imgcontainer} full-flex`}>
                            <Image className="rounded rounded-3" style={{objectFit:"cover"}} src='/AYED.jpg' alt='A photo ilustrating the AYED project' fill/>
                    </div>
                </div>
                <div className="mt-3 mt-md-0">
                    {/* <p className="fw-bold">
                        Key objectives of AYED include:
                    </p>
                        <ul>
                            <li>
                                Raising awareness and educating youth about energy transition challenges and opportunities.                          
                            </li>
                            <li>
                                Promoting cross-border collaboration and exchange of knowledge among African youth.
                            
                            </li>
                            <li>
                                Encouraging sustainable innovation by youth to develop practical energy solutions.
                            
                            </li>
                            <li>
                                Facilitating intergenerational dialogue between youth and experienced stakeholders.
                            
                            </li>
                            <li>
                                Inspiring youth advocacy for sustainable energy policies and actions.
                            </li>
                            <li>
                                Building a robust network of young African energy leaders and changemakers.
                            </li>
                            <li>
                            The dialogue employs various approaches such as shared learning, networking, unified advocacy, joint initiatives, and cultural exchange to achieve its goals. Participants have the opportunity to share experiences, best practices, and collaborate on cross-border projects and initiatives.
                            </li>
                        </ul> */}
                </div>
                </div>
            </section>
            <section className=" mt-5 bg-primary text-white py-5 px-2">
                <div className="mt-3 container">
                <div className={`${styles.ayedcontainer} d-md-flex
                align-items-center gap-4`}>
                    <div className="full-flex">
                    <h2 className="fw-bold fs-3 text-secondary">
                        {project2.title}
                    </h2>
                        <div className={`${styles.imgcontainer2} full-flex`}>
                                <Image className="rounded rounded-4" style={{objectFit:"cover"}} src='/MovieScreening.jpg' alt='A photo ilustrating the AYED project' fill/>
                        </div>
                    </div>
                    <div className="full-flex mt-4">
                        <p>
                            {project2.body}
                        </p>   
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default page;