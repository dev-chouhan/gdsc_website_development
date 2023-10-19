import React from "react";

function Home() {
    return (
        <>
            <section id="hero">
                <div className="hero-container">
                    <h3>From the <span style={{fontWeight:"bold"}}>University of Engineering & Management, Jaipur</span></h3>
                    <h1 style={{fontFamily:"Times New Roman"}} >GDSC</h1>
                    <h2>Grow Together</h2>
                    <div className="hero-btn">
                        <a href="https://forms.gle/FGfTHNxUZ6nyFWBz9" className="btn-get-started scrollto">Join Our Community</a>
                        <a href="https://forms.gle/sqXsJpdwem4nc5wm6" className="btn-get-started scrollto">Join Team</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;