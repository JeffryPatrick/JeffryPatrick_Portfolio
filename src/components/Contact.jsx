import "/src/css/Contact.css"

const Contact = () => {

    const today = new Date();


    const sendEmail = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section id={"contact"} className={"contact-section container"}>
                <div className={"top-part"}>
                    <h1 className={"heading"}>Contact</h1>
                    <p className={"subheading-2"}>Get In Touch</p>
                </div>
                <form className={"contact-form"} onSubmit={sendEmail}>
                    <input type={"text"} id={"user_name"} className={"subheading-2"} placeholder={"Name"}/>
                    <input type={"email"} id={"user_email"} className={"subheading-2"} placeholder={"Email"}/>
                    <input type={"text"} id={"subject"} className={"subheading-2"} placeholder={"Subject"}/>
                    <textarea id={"message"} className={"subheading-2"} placeholder={"Message"} rows={5}></textarea>
                    <button type={"submit"} className={"btn"}>Send Email</button>
                </form>
                <div className={"contact-links"}>
                    <a href={"/linkedin"}>
                        <img src={"/src/assets/icons/linkedin.png"} alt={"linkedin-icon"}/>
                    </a>
                    <a href={"mailto:jeffrypatrick430@gmail.com"}>
                        <img src={"/src/assets/icons/email.png"} alt={"email-icon"}/>
                    </a>
                    <a href={"/mobile"}>
                        <img src={"/src/assets/icons/mobile.png"} alt={"mobile-icon"}/>
                    </a>
                    <a href={"/facebook"}>
                        <img src={"/src/assets/icons/facebook.png"} alt={"facebook-icon"}/>
                    </a>
                    <a href={"/instagram"}>
                        <img src={"/src/assets/icons/instagram.png"} alt={"instagram-icon"}/>
                    </a>
                    <a href={"/twitter"}>
                        <img src={"/src/assets/icons/twitter.png"} alt={"X-icon"}/>
                    </a>
                </div>
            </section>
            <footer>
            <p className={"description"}>&copy;&nbsp;{today.getFullYear()}&nbsp;Developed By <a
                    href={'https://jeffrypatrick.github.io/ReactPortfolio/'} target={'_blank'}>Jeffry Patrick</a>. All
                    Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Contact;