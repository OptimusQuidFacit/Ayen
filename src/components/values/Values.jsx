import styles from "./values.module.css"
import { FaHandHolding, FaPeopleGroup, FaPersonPraying } from "react-icons/fa6";
import { GiAfrica } from 'react-icons/gi';

const Values = () => {
    const values=[
        {
            title:'Humility',
            body: `
            We aware of one's strengths and
            weaknesses, and taking responsibility for
            one's actions. It also means being open to
            learning from others, treating all with
            respect, and fostering an environment of
            mutual understanding and collaboration.
            Ultimately, embracing humility allows us to
            be more successful, both in our personal and
            professional lives.
            `,
            icon: <FaPersonPraying/>
        },
        {
            title:'Team Work',
            body: `
            Our team emphasizes the importance of
            collaboration, understanding and open mindedness when working towards a
            common goal. We strive to foster an
            environment of positivity, a sense of
            belonging and an overall feeling of unity.
            Through this, the team works to ensure
            that each team member's contribution is
            valued and respected.
            `,
            icon: <FaPeopleGroup/>
        },
        {
            title:'Africa-Centric',
            body: `
            We are firmly rooted in African culture and
            tradition. We emphasizes the importance
            of taking responsibility for one’s actions,
            and treating all persons with respect and
            fairness, regardless of race, gender,
            religion, or any other factor. AYEN seeks to
            ensure positive and lasting development
            at the community level.
            `,
            icon: <GiAfrica />
        },
        {
            title:'Boldness',
            body: `
            We emphasize the importance of standing
            out, taking risks, and embracing change.
            This is rooted in the idea that true success
            comes from being bold, pushing
            boundaries, and not being afraid to try
            something new. We believe in the
            importance of taking risks and having the
            courage to be bold in order to achieve
            success.
            `,
            icon: <FaHandHolding/>
        },

    ]
    return (
        <div className={`${styles.wrapper} bg-secondary p-lg-5 p-1 rounded-3`}>
            {
                values.map(value=>

            <div key={value.title} className={`${styles.card} bg-light rounded-3 p-4 m-3`}>
                <div className={`text-center fs-1 text-primary`}>
                    {value.icon}
                </div>
                <div className={`${styles.text}`}>
                    <h3 className="fw-bold text-center">
                        {value.title}
                    </h3>
                    <p>
                        {value.body}
                    </p>
                </div>
            </div>
                )
            }
        </div>
    );
}

export default Values;