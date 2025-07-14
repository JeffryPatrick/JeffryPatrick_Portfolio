import "/src/css/About.css"


const About = () => {
    return (
        <section id={"about"} className={"about-section container"}>
            <p className={"heading"}>Get to Know About Me</p>
            <img src={"assets/images/me.jpg"} alt={"Jeffry Patrick Image"} className={"about-img"} />
            <div className={"about-content"}>
                <p className={"subheading"}>Hi, This is</p>
                <span className={"heading"}>JEFFRY PATRICK</span>
                <p className={"heading-2"}>{'<'}Developer{'/>'}</p>
                <p className={"subheading-2"}>
                    A code artist with a knack for front-end development and a strong foundation in HTML, CSS, JS, and React.
                    Also for back-end development proficiency in Java and J2EE including Database such as MySQL
                    I'm passionate about leveraging my skills to create visually appealing,
                    user-friendly interfaces and building robust, efficient server-side functionalities.
                </p>
                <div className={"links"}>
                    <a className={"btn"} href={"https://drive.google.com/file/d/1iIk-fRu56Y-Z_D2p7RQAJmOUwJd-1hlJ/view"} target={'_blank'}>Resume</a>
                    <a className={"btn"} href={"https://github.com/JeffryPatrick"} target={'_blank'}>GitHub</a>
                </div>
            </div>
        </section>
    )
}

export default About;