import React from 'react';
import {NavLink} from "react-router-dom"

function NavBar() {


    return (
        <>

        <nav id="nav-bar" className="navbar navbar-expand" >
            <div className="nav-links-group">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <h3>Blogs</h3>
                <h3>Reach Me</h3>
            </div>
        </nav>
        
        
        </>
        
    )
    

}

export default NavBar;



{/* <div className="nav-header-group">
                <h2 className="nav-header"> Ezra's workspace</h2>
            </div> */}