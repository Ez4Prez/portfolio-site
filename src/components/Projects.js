import React from 'react';

function Projects() {



    return (
        <div className="projects-page">

            <h2 className="projects-header">Project Gallery</h2>
            <div className="projects-container">
                <div className="nuekid-site-container">
                    <div id="nue-kid-carousel" className="carousel slide carousel-fade" data-bs-theme="dark">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/nuekid-img1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/nuekid-img2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/nuekid-img3.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/nuekid-img5.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/nuekid-img4.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/nuekid-img6.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#nue-kid-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#nue-kid-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="nuekid-site-btn-wrap" >
                        <button className="btn btn-link">View Live Site</button>
                        <img src="images/github-logo.png" style={{ width: '40px', height: '40px' }} />
                        <img src="images/loom_logo.png" style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>

                <div className="nuekid-bio-container" style={{ width: '500px', height: '450px' }}>
                    <h3 className="nuekid-bio-header">Nue Kid</h3>
                    <h4 className="nuekid-bio-subhead">Purpose</h4>
                    <text className="nuekid-bio-text">
                        A full-stack web application built using React, SQLite, and Python with Flask. Nue Kid is a social app where users can meet up in different neighborhoods for various hobbies and activties. Geared towards individuals who are new to an area or simply to find activities new you.
                    </text>
                    <h4 className="nuekid-subhead">Tech Stack</h4>
                    <div className="techstack-wrap">
                        <img src="images/js-icon.png" className="js-icon" alt="..." style={{height: '48px', width:'48px'}} />
                        <img src="images/react-icon.png" className="react-icon" alt="..." style={{height: '40px', width:'40px'}}/>
                        <img src="images/python-logo.jpg" className="python-icon" alt="..." style={{height: '48px', width:'48px'}}/>
                        <img src="images/sql-icon.png" className="sql-icon" alt="..." style={{height: '32px', width:'32px'}}/>
                        <img src="images/flask-logo.png" className="flask-icon" alt="..." style={{height: '48px', width:'48px'}}/>
                    </div>
                </div>

                <div className="thrifter-bio-container" style={{ width: '500px', height: '450px' }}>
                    <h3 className="thrifter-bio-header">Thrifter</h3>
                    <h4 className="thrifter-bio-subhead">Purpose</h4>
                    <text className="thrifter-bio-text">
                        Thrifter is a contemporary vision for eco-conscious fashion. Users are able to buy and sell high quality clothing through an online market and community.
                    </text>
                    <h4 className="thrifter-bio-text">Tech Stack</h4>
                    <text className="thrifter-bio-text">
                        Javascript, React, Python, Flask, SQLite
                    </text>
                </div>

                <div className="thrifter-site-wrap">
                    <div id="thrifter-carousel" className="carousel slide carousel-fade" data-bs-theme="dark">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/thrifter-img1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/thrifter-img2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/thrifter-img3.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/thrifter-img4.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#thrifter-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#thrifter-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="thrifter-site-btn-wrap" >
                        <button className="btn btn-link">View Live Site</button>
                        <img src="images/github-logo.png" style={{ width: '40px', height: '40px' }} />
                        <img src="images/loom_logo.png" style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>

                <div className="marvel-site-wrap">
                    <div id="marvel-carousel" className="carousel slide carousel-fade" data-bs-theme="dark">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/marvel-app-img1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="images/marvel-app-img2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#marvel-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#marvel-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="marvel-site-btn-wrap" >
                        <button className="btn btn-link">View Live Site</button>
                        <img src="images/github-logo.png" style={{ width: '40px', height: '40px' }} />
                        <img src="images/loom_logo.png" style={{ width: '40px', height: '40px' }} />
                    </div>
                </div>

                <div className="marvel-bio-container" style={{ width: '500px', height: '450px' }}>
                    <h3 className="marvel-bio-header">Marvel Fanpage</h3>
                    <h4 className="marvel-bio-subhead">Purpose</h4>
                    <text className="marvel-bio-text">
                        Thrifter is a contemporary vision for eco-conscious fashion. Users are able to buy and sell high quality clothing through an online market and community.
                    </text>
                    <h4 className="marvel-bio-text">Tech Stack</h4>
                    <text className="marvel-bio-text">
                        Javascript, React, Python, Flask, SQLite
                    </text>
                </div>

            </div>

        </div>




    )


}

export default Projects;



