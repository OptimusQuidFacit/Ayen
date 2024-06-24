const { FaPersonPraying, FaPeopleGroup, FaHandHolding } = require("react-icons/fa6")
const { GiAfrica } = require("react-icons/gi")

//You are only allowed to edit content after the semi colon


//The first heading
export const heading1= "African Youths in Energy Network"

//Mission Statement
export const mission={
    heading: "Mission",
    text: ` The AYEN Organization mission is to
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
            future.`
}

//Vision Statement
export const vision ={
    heading: "Vision",
    text: ` We seek to empower Youths and place
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
            become energy leaders and innovators.`
}

//Our core Values
export const coreValues={
    heading: "Our Core Values",
    values:[
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
    }
