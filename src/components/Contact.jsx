import "/src/css/Contact.css"
import React from "react";

import emailjs from '@emailjs/browser';

const Contact = () => {

    const today = new Date();

    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_95k1fiy', 'template_lip8zxe', form.current, {
                publicKey: 'MfVWoqjxJMZ0Ky7Xs',
            })
            .then(
                () => {
                    alert("Sent Successfully");
                },
                (error) => {
                    alert("Failed, Try Again");
                },
            );

        form.current.reset();
    }


    return (
        <>
            <section id={"contact"} className={"contact-section container"}>
                <div className={"top-part"}>
                    <h1 className={"heading"}>Contact</h1>
                    <p className={"subheading-2"}>Get In Touch</p>
                </div>
                <form className={"contact-form"} onSubmit={sendEmail} ref={form}>
                    <input type={"text"} name={"user_name"} className={"subheading-2"} placeholder={"Name"} required/>
                    <input type={"email"} name={"user_email"} className={"subheading-2"} placeholder={"Email"}
                           required/>
                    <input type={"text"} name={"subject"} className={"subheading-2"} placeholder={"Subject"} required/>
                    <textarea name={"message"} className={"subheading-2"} placeholder={"Message"} rows={5}
                              required></textarea>
                    <button type={"submit"} className={"btn"}>Send Email</button>
                </form>
                <div className={"contact-links"}>
                    <a href={"tel:6384925568"} target={'_blank'}>
                        <img src={"assets/icons/mobile.png"} alt={"mobile-icon"}/>
                    </a>
                    <a href={"mailto:jeffrypatrick430@gmail.com"} target={'_blank'}>
                        <img src={"assets/icons/email.png"} alt={"email-icon"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/jeffry-patrick"} target={'_blank'}>
                        <img src={"assets/icons/linkedin.png"} alt={"linkedin-icon"}/>
                    </a>
                </div>
            </section>
            <footer>
                <img src={'assets/images/portfolioIco.png'} alt={"logo of Jeffry Patrick"}/>
                <p className={"description"}>&copy;&nbsp;{today.getFullYear()}, Jeffry Patrick. All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Contact;