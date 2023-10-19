import React from 'react'

function Footer() {
    return (
        <div>
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Visit Us:</h3>
                                <p>
                                    University Campus:<br />
                                    “GURUKUL”, 6 kms from Chomu on Sikar Road (NH-11), Udaipuria Mod, Jaipur-303807, Rajasthan<br /><br />
                                    <span style={{ fontWeight: "bold !importand" }}>Phone:</span> +91 62964 99137<br />
                                    <span style={{ fontWeight: "bold !importand" }}>Email:</span> gdsc.uemj@gmail.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="https://linktr.ee/tssuemj">Our Socials</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#home">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#services">Activities</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Us</h4>
                                <p>Join us at UEMJ GDSC by clicking the link below</p>
                                <a className="cta-btn" href="https://forms.gle/FGfTHNxUZ6nyFWBz9">Join GDSC</a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            <a href="https://github.com/thespeechsociety/thespeechsociety.github.io/graphs/contributors">
                                Designed by <u> Web Dev Team </u> at GDSC, UEMJ </a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="https://www.instagram.com/tssuemj/" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="https://twitter.com/tssuemj" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/tssuemj" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.linkedin.com/company/tssuemj/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
