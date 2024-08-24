import "/src/css/Projects.css"

const Projects = () => {
    return (
        <section id={"projects"} className={"project-section container"}>
            <p className={"heading"}>Projects</p>
            <p className={"subheading-2"}>Browse the Projects I've developed</p>
            <div className={"proj-content"}>
                <div className={"card"}>
                    <img src={"/assets/images/project-management.png"} className={"proj-img"}
                         alt={"Image of the Project"}/>
                    <div className={"proj-template"}>
                        <p className={"card-title"}>Invoice Management Software</p>
                        <p className={"card-stmt"}>Year - 2023</p>
                        <ul className={"tech-stack"}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>Java</li>
                            <li>Spring Boot</li>
                        </ul>
                        <p className={"card-info"}>
                            <span>Project description -</span> I have developed this web application and
                            deployed the frontend,
                            backend and database in internet.</p>
                        <div className={"proj-links"}>
                            <a href={"/git"}>GitHub</a>
                            <a href={"/live"}>Live Page</a>
                        </div>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={"/assets/images/project-management.png"} className={"proj-img"}
                         alt={"Image of the Project"}/>
                    <div className={"proj-template"}>
                        <p className={"card-title"}>Invoice Management Software</p>
                        <p className={"card-stmt"}>Year - 2023</p>
                        <ul className={"tech-stack"}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>Java</li>
                            <li>Spring Boot</li>
                        </ul>
                        <p className={"card-info"}>
                            <span>Project description -</span> I have developed this web application and
                            deployed the frontend,
                            backend and database in internet.</p>
                        <div className={"proj-links"}>
                            <a href={"/git"}>GitHub</a>
                            <a href={"/live"}>Live Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;