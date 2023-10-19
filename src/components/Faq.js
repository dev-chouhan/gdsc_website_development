import React from 'react'

function Faq() {
    return (
        <div>
            <section id="faq" className="faq">
                <div className="container">

                    <div className="section-title">
                        <h2>F.A.Q</h2>
                        <h3>Frequently Asked <span>Questions</span></h3>
                    </div>

                    <ul className="faq-list">

                        <li>
                            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What is GDSC? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae voluptates voluptatem possimus illum, eius quisquam odit consequuntur vel ipsam velit?
                                </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Why GDSC ? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequatur, odit asperiores aliquam totam modi animi, ut nihil sapiente iure recusandae fuga ipsum sed ex. Sed alias saepe nisi et. </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">What is Our Vision? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eveniet aspernatur in veniam tenetur distinctio nemo placeat? Repellendus ratione facere quas ipsa voluptates? Maxime laborum quod iure hic vitae minima aperiam! Iste incidunt et debitis mollitia, quaerat pariatur repellendus voluptate? </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Faq
