import "/src/css/About.css"


const About = () => {
    return (
        <section id={"about"} className={"about-section container"}>
            <p className={"heading"}>Get to Know About Me</p>
            <img src={"assets/images/avatar.jpg"} alt={"Jeffry Patrick Image"} className={"about-img"}/>
            <div className={"about-content"}>
                <p className={"subheading"}>Hi, This is</p>
                <span className={"heading"}>SivaSudhan</span>
                <p className={"heading-2"}>Financial Adviser | Business Analyst | Consultant</p>
                <p className={"subheading-2"}>
                    As a seasoned Business Consultant and Financial Adviser, I am passionate about
                    empowering individuals and businesses to achieve their financial goals and
                    unlock their true potential. With a solid background in finance, business strategy,
                    and analytics, I offer a unique blend of expertise that drives tangible results.
                </p>
                <div className={"links"}>
                    <a className={"btn"} href={"/#resume"}>Resume</a>
                    <a className={"btn"} href={"/#contact"}>Contact</a>
                </div>
            </div>
        </section>
    )
}

export default About;