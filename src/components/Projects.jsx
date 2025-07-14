import "/src/css/Projects.css"

const Projects = () => {
    return (
        <section id={"projects"} className={"project-section container"}>
            <p className={"heading"}>Projects</p>
            <p className={"subheading-2"}>Browse the Projects I've developed</p>
            <div className={"proj-content"}>
                <div className={"card"}>
                    <img src={"/assets/images/crud.png"} className={"proj-img"}
                         alt={"Image of the Project"}/>
                    <div className={"proj-template"}>
                        <p className={"card-title"}>CRUD Operation</p>
                        <p className={"card-stmt"}>Year - 2023</p>
                        <ul className={"tech-stack"}>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>JS</li>
                        </ul>
                        <p className={"card-info"}>
                            <span>Project description -</span> It is designed based on concept of Music System,
                            it follows CRUD operation, where we can create a new song, play it and update the details of
                            the song.
                        </p>
                        <div className={"proj-links"}>
                            <a href={"https://github.com/JeffryPatrick/MusicSystem"} target={"_blank"}>GitHub</a>
                            <a id={"crud-disabled"}>Live Page</a>
                        </div>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={"/assets/images/jokeimg.jpeg"} className={"proj-img"}
                         alt={"Image of the Project"}/>
                    <div className={"proj-template"}>
                        <p className={"card-title"}>Joke Generator</p>
                        <p className={"card-stmt"}>Year - 2023</p>
                        <ul className={"tech-stack"}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React.js</li>
                        </ul>
                        <p className={"card-info"}>
                            <span>Project description -</span>
                            In this project, Handling API call is major concern with hooks such as useState() and
                            useEffect() in React.js.
                            From the API we get random jokes.
                        </p>
                        <div className={"proj-links"}>
                            <a href={"https://github.com/JeffryPatrick/ReactJokeGenerator"} target={"_blank"}>GitHub</a>
                            <a href={"https://jeffrypatrick.github.io/ReactJokeGenerator/"} target={"_blank"}>Live Page</a>
                        </div>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={"/assets/images/todo.png"} className={"proj-img"}
                         alt={"Image of the Project"}/>
                    <div className={"proj-template"}>
                        <p className={"card-title"}>Todo List</p>
                        <p className={"card-stmt"}>Year - 2023</p>
                        <ul className={"tech-stack"}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React.js</li>
                        </ul>
                        <p className={"card-info"}>
                            <span>Project description -</span>
                            This project is similar as CRUD operation,
                            but the difference is, it is developed in React library and hooks such as useState() used.
                        </p>
                        <div className={"proj-links"}>
                            <a href={"https://github.com/JeffryPatrick/ReactTodoApp"}>GitHub</a>
                            <a href={"/live"}>Live Page</a>
                        </div>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={"/assets/images/weather.png"} className={"proj-img"}
                         alt={"Image of the Project"}/>
                    <div className={"proj-template"}>
                        <p className={"card-title"}>Weather App</p>
                        <p className={"card-stmt"}>Year - 2023</p>
                        <ul className={"tech-stack"}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React.js</li>
                        </ul>
                        <p className={"card-info"}>
                            <span>Project description -</span>
                            This project is similar as Joke Generator, but the difference here is,
                            the value retured from one API call is send to another API call as parameter
                            (i.e. lat and lon is passed).
                        </p>
                        <div className={"proj-links"}>
                            <a href={"https://github.com/JeffryPatrick/ReactWeatherApp"}>GitHub</a>
                            <a href={"https://patrick-weather.web.app"} target={"_blank"}>Live Page</a>
                        </div>
                    </div>
                </div>
                <div className={"card"}>
                    <img src={"/assets/images/tictactoe.png"} className={"proj-img"}
                         alt={"Image of the Project"}/>
                    <div className={"proj-template"}>
                        <p className={"card-title"}>Tic Tac Toe</p>
                        <p className={"card-stmt"}>Year - 2023</p>
                        <ul className={"tech-stack"}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React.js</li>
                        </ul>
                        <p className={"card-info"}>
                            <span>Project description -</span>
                            This Project is developed based on React library, where props, and hooks like useState() is used.
                            It is Responsive.
                        </p>
                        <div className={"proj-links"}>
                            <a href={"https://github.com/JeffryPatrick/ReactTicTacToe"} target={"_blank"}>GitHub</a>
                            <a href={"https://patrick-tictactoe.web.app"} target={"_blank"}>Live Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;