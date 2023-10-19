import React from 'react'

function Team() {
    return (
        <div>
            <section id="team" className="team">
                <div className="container">

                    <div className="section-title">
                        <h2>Team</h2>
                        <h3>Our Hardworking <span>Team</span></h3>
                        <p>#teamgdsc</p>
                    </div>

                    <div className="row">

                        <div className="">
                            <div className="member">
                                <div className="member-img">
                                    <img src="https://images.pexels.com/photos/6646967/pexels-photo-6646967.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="" />
                                </div>
                                <div className="member-info">
                                    <h4>Team GDSC</h4>
                                    <span>The very hardworking and extremely motivated team of UEMJ</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Team
