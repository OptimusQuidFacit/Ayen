import Image from "next/image";
import styles from "./project.module.css"
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
                        African Youths in Energy Network (AYED)
                    </h2>
                        <p>
                        The African Youth Energy Dialogue (AYED) is an annual  event organized to bring together young people from across Africa to discuss critical energy issues facing the continent. The dialogue serves as a platform for youth engagement, knowledge sharing, and collaboration towards finding innovative solutions to address Africa's energy challenges.
                        The AYED was first launched in 2022 and has become an annual initiative due to its success and importance. Each year, the dialogue focuses on a specific theme related to energy transition, sustainability, and development in Africa.
                        

                        </p>
                        
                    </div>
                    <div className={`${styles.imgcontainer} full-flex`}>
                            <Image className="rounded rounded-3" style={{objectFit:"cover"}} src='/AYED.jpg' alt='A photo ilustrating the AYED project' fill/>
                    </div>
                </div>
                <div className="mt-3 mt-md-0">
                    <p className="fw-bold">
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
                        </ul>
                </div>
                </div>
            </section>
            <section className="bg-primary text-white py-5 px-2">
                <div className="mt-3 container">
                <div className={`${styles.ayedcontainer} d-md-flex
                align-items-center gap-4`}>
                    <div className="full-flex">
                    <h2 className="fw-bold fs-3 text-secondary">
                        Movie Screening Tour
                    </h2>
                        <div className={`${styles.imgcontainer2} full-flex`}>
                                <Image className="rounded rounded-4" style={{objectFit:"cover"}} src='/MovieScreening.jpg' alt='A photo ilustrating the AYED project' fill/>
                        </div>
                    </div>
                    <div className="full-flex mt-4">
                        <p>
                        The African Youths in Energy Network  movie screening tour Project is aimed  to raise awareness about the critical issue of energy poverty. The tour featured the film "Switch On", a powerful movie based on true events that highlights the struggles faced by individuals and communities lacking access to basic energy services.
                        The objective is to educate viewers, especially youth, about the causes and impacts of energy poverty while inspiring them to take action to support efforts promoting universal access to clean, sustainable energy. After each screening, a panel discussion with energy experts will provide further insights and resources.
                        By bringing this important film to Youths across the continent, AYEN aims to spark conversation, understanding, and mobilize youth to join the fight against energy poverty affecting millions worldwide. The tour represents a platform to facilitate dialogue and drive positive change through access to energy for all.
                        </p>   
                    </div>
                </div>
                </div>
            </section>
        </>
    );
}

export default page;