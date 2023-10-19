import React from 'react'

function Contact() {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <h3>Contact <span>Us</span></h3>
                    </div>

                    <div>
                        <iframe style={{border:"0", width: "100%", height: "270px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.2128051254376!2d75.6980723145723!3d27.212467753673188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cffc30dacc2db%3A0xb78e5c340c935a95!2sUniversity+of+Engineering+%26+Management+(+UEM+)+Jaipur!5e0!3m2!1sen!2sin!4v1460024929225" frameborder="0" allowfullscreen></iframe>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>University Campus:<br/>
                                        “GURUKUL”, 6 kms from Chomu on Sikar Road (NH-11), Udaipuria Mod, Jaipur-303807, Rajasthan</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>uemj.uemj@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+91 89890934887</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
