import React from 'react';
import bioContent from './bioContent';

function Home() {

    return (
        <div className="home-container" >

            <div className="home-header-wrapper" >
                <h1 className="home-header">Welcome to my workspace...</h1>
            </div>

            <div className="home-content-container" >
                <div className="home-card-wrapper" >

                    <div className="home-card" >

                        <div className="home-card-image">
                            <img src="images/profile-pic.jpg" alt="profile one" />
                        </div>

                        <ul className="social-icons">
                            <li>
                                <a href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>

                        <div className="details">
                            <h2>Ezra Mays Richards</h2>
                            <h3 className="job-title">Web Developer</h3>
                        </div>
                    </div>
                </div>

                <div className="home-bio-wrapper">
                    <h4 className="home-bio">{bioContent}</h4>
                </div>

            </div>

            <div className="home-tech-wrapper">
                <h2 className="home-tech-header">Technologies:</h2>
            </div>


        </div>
    )


}

export default Home;


        // <div className="home">
        //     <h1 className="home-header">Ezra's workspace.</h1>
        //     <div className="welcome-container">
        //         <img src="https://www.creativefabrica.com/wp-content/uploads/2023/05/30/Colorful-Ink-Splash-Paint-splatter-Graphics-70939700-1.jpg" alt="paint-img" />
        //     </div>
        //     <div className="bio-container">
        //         <h4 className="bio">
        //             Welcome to my porfolio and project hub. I am a full-stack web developer with a drive for creativity and ingenuity. Feel free to check out my work and reach out to make friends.
        //         </h4>
        //     </div>
        // </div>