import Image from "next/image";
import styles from './personnel.module.css'
const Personnel = () => {
    const persons= [
        {
            name: "Promise Nwogu",
            position:"President",
            photo: "/Promise.jpg",
            text: `
                Promise Nwogu is a Petroleum Engineering graduate from the Federal University of Technology Owerri, Nigeria. He
                has since taken an interest in the renewable energy sector due to the positive impacts he has seen in the lives of
                underserved communities in Nigeria. Furthermore, he is a fellow of the Student Energy Leaders Fellowship and
                was a challenge winner of "How to Change the World", where his team provided a solution to climate change in
                Dori Burkina Faso. With a Petroleum Engineering background and experience working in the Renewable energy
                sector, he has a well-rounded view on Energy Transition and Climate Change.
            `

        },
        {
            name: "Blessing Enendu",
            position:"Aministrative Manager",
            photo: "/Blessing.jpg",
            text: `
                Blessing Enendu is a Chemical Engineering Graduate from the Federal University of Technology Owerri. She has
                passion for Sustainable Energy. She is currently the Executive manager of AYEN. Outside this, She loves carrying
                out research on Corrosion and Energy. She is also data analyst. She enjoys using her research and analytical
                skills to solve problems in the energy sector. Her research skill has driven her into co-authoring some journals
                one of which is, "Review on anti-corrosion properties of expired antihypertensive drugs as benign corrosion
                inhibitors for metallic materials in various environment.
            `

        },
        {
            name: "Vusi Mashinini",
            position:"Legal Manager",
            photo: "/Vusi.jpg",
            text:`
                Vusi has a cumulative experience of 3 years in the financial sector.In his previous role as a Manager in
                Corporate Affairs and Strategy, he oversaw strategic planning, corporate communications, stakeholder
                relations, and compliance. His role involved developing and implementing strategies aligned with our
                corporate goals, maintaining a positive corporate image, and ensuring legal and regulatory compliance. He
                was responsible for budget oversight, governance, and reporting to senior management. Additionally, I
                provided legal and governance support, contributed to policy development, and managed complex financial
                transactions while promoting sustainability and innovation within the organization.
            
            `

        },
        {
            name: "Chanda Siame",
            position:"Strategy Manager",
            photo: "/Chanda.jpg",
            text: `
                As a recent renewable energy graduate, Chanda is passionate about creating a sustainable future for our
                planet. She has a deep understanding of renewable energy technologies and always on the lookout for
                innovative solutions to address the world's energy challenges. Chanda is also a firm believer in a global
                collective effort to achieve Zero-carbon emissions by 2050 in line with the United Nations Sustainable
                Development Goals.
            `

        },
        {
            name: "Oluwafunmilola",
            position:"Legal Partner",
            photo: "/funmi.jpg",
            text: `
                Oluwafunmilola is a detail-oriented lawyer with experience in dispute resolution, company secretarial, and corporate commercial practices. She received an LL.B degree from the University of Ibadan, Nigeria and a B.L from the Nigerian Law School.She became interested in energy and sustainability during her studies at the University. Currently, Oluwafunmilola provides governance services to Nigerian and international companies by developing Environmental, Social, and Governance (ESG) frameworks for the companies and advising on sustainability. She speaks English and basic French.
            `

        },
    ]
    return (
        <div>
            <div className={`${styles.wrapper} `}>
                {
                    persons.map(person=>
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