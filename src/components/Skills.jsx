import "/src/css/Skills.css"

const Skills = () => {
    return (
        <section id={"skills"} className={"skill-section container"}>
            <p className={"heading"}>Skills</p>
            <p className={"subheading-2"}>Explore the skills that I've learn</p>
            <div className={"skill-content"}>
                <div className={"card"}>
                    <p className={"card-title"}>Frontend Dev</p>
                    <ul className={"skill-list"}>
                        <li className={"card-stmt"}>HTML</li>
                        <li className={"card-stmt"}>CSS</li>
                        <li className={"card-stmt"}>JavaScript</li>
                        <li className={"card-stmt"}>Bootstrap</li>
                        <li className={"card-stmt"}>React</li>

                    </ul>
                </div>
                <div className={"card"}>
                    <p className={"card-title"}>Backend Dev</p>
                    <ul className={"skill-list"}>
                        <li className={"card-stmt"}>HTML</li>
                        <li className={"card-stmt"}>CSS</li>
                        <li className={"card-stmt"}>JavaScript</li>
                        <li className={"card-stmt"}>Bootstrap</li>
                        <li className={"card-stmt"}>React</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills;