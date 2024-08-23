import "/src/css/Objective.css";

const Objective = () => {
    return (
        <section id={"objective"} className={"objective-section container"}>
            <span className={"heading"}>Objective</span>
            <p className={"subheading-2"}>My Intention towards Career and an Outlook of Software Development</p>
            <div className={"objective-content"}>
                <div className={"card"}>
                    <p className={"card-title"}>Work Style</p>
                    <p className={"card-stmt"}>My way of approaching a work</p>
                    <p className={"card-info"}>
                        As I said earlier, my work style is dynamic and adaptable.
                        I thrive in fast-paced environments, quickly adjusting to new challenges
                        and collaborating effectively to drive progress.
                    </p>
                </div>
                <div className={"card"}>
                    <p className={"card-title"}>Point to  Onboard Me</p>
                    <p className={"card-stmt"}>How I'm Unique from Others</p>
                    <p className={"card-info"}>
                        I believe that I would be a strong fit for your team due to my hands on experience in both Frontend Technologies and Backend Technologies
                        and my proactive approach to problem-solving. I'm keen to apply my skills effectively and commited
                        to advance professionally in an organization.
                        My drive make me well-suited to contribute the success of the projects.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Objective;