import React, { Component } from "react";
import "./Footer.css";
import Confetti from '../../element/utils/wellDone'
const logofooter = require('../../../images/m1.png');
const styles = {

  imgStyle :{
    width: '200px',
    height: '200px',
  },

  confStyle :{
    marginLeft: '-50px'
  },
}



class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5>Humanize Technology</h5>
              <p className="grey-text">
              UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.
              <p></p>Design used to be the seasoning you’d sprinkle on for taste; now it’s the flour you need at the start of the recipe.
              </p>
            </div>
            <div className="col l4 offset-l2 s12 footCon">
            
             
              <div style={styles.confStyle}><Confetti/></div>
              <img src={logofooter} style={styles.imgStyle}/>
            </div>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
