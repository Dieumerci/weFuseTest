import React from 'react'
import "./NavBar.css";


const divPadding = {
    paddingLeft: '20px',
  };
  const divSearch = {
    paddingLeft: '20px',
    transform: ([{ rotateX: '180deg' }, { rotateZ: '180deg' }])
  };


function NavBar() {
    
  return (
<nav className="nav navbar-transition cool-navbar z-depth-0" role="navigation">

<div className="nav-wrapper grey darken-4">
          <a href="" className="dazes"  ><i className="material-icons left " style={divPadding}>dehaze</i></a>

            <ul className="right hide-on-med-and-down">
              <li style={divPadding}>
                <a href="www.google.com"><i className="material-icons right" style={divSearch}>search</i></a>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="www.google.com"><i className="material-icons right" >search</i></a>
              </li>
            </ul>
            <a
              href="www.google.com"
              data-target="nav-mobile"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
  );
}

export default NavBar;