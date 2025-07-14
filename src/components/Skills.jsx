import "/src/css/Skills.css"

const Skills = () => {
    return (
        <section id={"skills"} className={"skill-section container"}>
            <p className={"heading"}>Skills</p>
            <p className={"subheading-2"}>Explore the skills that I've learn</p>
            <div className={"skill-content"}>
                <div className={"card"}>
                    <p className={"card-title"}>Frontend </p>
                    <ul className={"skill-list"}>
                        <li className={"card-stmt"}>HTML</li>
                        <li className={"card-stmt"}>CSS</li>
                        <li className={"card-stmt"}>JavaScript</li>
                        <li className={"card-stmt"}>Bootstrap</li>
                        <li className={"card-stmt"}>React</li>

                    </ul>
                </div>
                <div className={"card"}>
                    <p className={"card-title"}>Backend</p>
                    <ul className={"skill-list"}>
                        <li className={"card-stmt"}>Java</li>
                        <li className={"card-stmt"}>Servlets</li>
                        <li className={"card-stmt"}>JSP</li>
                        <li className={"card-stmt"}>DBMS</li>
                        <li className={"card-stmt"}>MySQL</li>
                    </ul>
                </div>
                <div className={"card"}>
                    <p className={"card-title"}>Tools</p>
                    <ul className={"skill-list"}>
                        <li className={"card-stmt"}>IntelliJ Idea</li>
                        <li className={"card-stmt"}>MySQL Workbench</li>
                        <li className={"card-stmt"}>VS Code</li>
                        <li className={"card-stmt"}>GitHub</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills;