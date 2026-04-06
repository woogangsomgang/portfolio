import React from 'react'
import '../css/common.scss'
import '../css/contact.scss'

function Contact() {
    return (

        <>


            <div className="contact">

                <div className="contact-logo">
                    <img src="./assets/svg/Contact.svg" alt="" />
                </div>

                <div className="contact-text">
                    <div className="contact-method">
                        <span className="method-name">Phone</span>
                        <span>010-9213-9855</span>
                    </div>
                    <div className="contact-method">
                        <span className="method-name">Email</span>
                        <span>jinyunseo0905@gmail.com</span>
                    </div>
                    <div className="contact-method">
                        <span className="method-name">GitHub</span>
                        <span>https://github.com/woogangsomgang</span>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact;
