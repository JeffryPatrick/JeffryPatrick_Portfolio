import "/src/css/Education.css";

const Education = () => {
    return (
        <section id={"education"} className={"education-section container"}>
            <p className={"heading"}>Education</p>
            <p className={"subheading-2"}>My passion for lifelong learning drives me to grow both academically and personally</p>
            <div className={"edu-content"}>
                <div className={"card"}>
                    <p className={"card-title"}>College Name</p>
                    <p className={"card-stmt"}>Course Name - Year/Month</p>
                    <p className={"card-stmt"}>Result or Mark</p>
                    <p className={"card-info"}><span>Learning Outcomes - </span>Inefnrf</p>
                </div>
                <div className={"card"}>
                    <p className={"card-title"}>College Name</p>
                    <p className={"card-stmt"}>Course Name - Year/Month</p>
                    <p className={"card-stmt"}>Result or Mark</p>
                    <p className={"card-info"}><span>Learning Outcomes - </span>Inefnrf</p>
                </div>
            </div>
        </section>
    )
}

export default Education;