import "/src/css/Navbar.css";
import React from "react";


const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = React.useState(false);

    return (<header className={'header'} id={"navigation"}>
            <div>
                <a href={'/'} className={'logo'}>SS</a>
            </div>
            <nav className={'navbar'}>
                <ul className={isNavExpanded ? 'nav-list expanded' : 'nav-list'}>
                    <li><a href={'/#about'} className={'nav-link'}
                           onClick={() => setIsNavExpanded(!isNavExpanded)}>About</a></li>
                    <li><a href={'/#objective'} className={'nav-link'}
                           onClick={() => setIsNavExpanded(!isNavExpanded)}>Objective</a></li>
                    <li><a href={'/#skills'} className={'nav-link'}
                           onClick={() => setIsNavExpanded(!isNavExpanded)}>Skills</a></li>
                    <li><a href={'/#projects'} className={'nav-link'}
                           onClick={() => setIsNavExpanded(!isNavExpanded)}>Projects</a></li>
                    <li><a href={'/#education'} className={'nav-link'}
                           onClick={() => setIsNavExpanded(!isNavExpanded)}>Education</a></li>
                    <li><a href={'/#contact'} className={'nav-link-contact'}
                           onClick={() => setIsNavExpanded(!isNavExpanded)}>Contact</a></li>
                </ul>
            </nav>
            <div className={"temp-contact"}>
                <a href={"/#contact"} className={"btn"}>Contact</a>
            </div>
            <div className={isNavExpanded ? "menu-icon rotate" : "menu-icon"}
                 onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <img src={"/public/assets/icons/hamburger-icon.png"} alt={"menu-icon"}/>
            </div>
        </header>

    )
}

export default Navbar;