import "/src/css/Education.css";

const Education = () => {
    return (
        <section id={"education"} className={"education-section container"}>
            <p className={"heading"}>Education</p>
            <p className={"subheading-2"}>My passion for lifelong learning drives me to grow both academically and personally</p>
            <div className={"edu-content"}>
                <div className={"card"}>
                    <p className={"card-title"}>PSG College of Technology</p>
                    <p className={"card-stmt"}>Master of Computer Applications</p>
                    <p className={"subheading-1"}>Aug 2024 - Jun 2026</p>
                    <p className={"card-stmt"}>*CGPA - 9.1</p>
                    {/*<p className={"card-info"}><span>Learning Outcomes - </span>Inefnrf</p>*/}
                </div>
                <div className={"card"}>
                    <p className={"card-title"}>SASTRA Deemed To Be University</p>
                    <p className={"card-stmt"}>Bachelor of Computer Applications</p>
                    <p className={"subheading-1"}>Oct 2020 - Jun 2023</p>
                    <p className={"card-stmt"}>CGPA - 8.31</p>
                    {/*<p className={"card-info"}><span>Learning Outcomes - </span>Inefnrf</p>*/}
                </div>
                <div className={"card"}>
                    <p className={"card-title"}>Christ The King Boys Matric Hr Sec School</p>
                    <p className={"card-stmt"}>Computer Science</p>
                    <p className={"subheading-1"}>Jun 2018 - Mar 2020</p>
                    <p className={"card-stmt"}>Pct - 73%</p>
                    {/*<p className={"card-info"}><span>Learning Outcomes - </span>Inefnrf</p>*/}
                </div>
            </div>
        </section>
    )
}

export default Education;