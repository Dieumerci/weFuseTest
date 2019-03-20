import React from 'react';
import Button from '../element/button/Button';
import { bounce, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import ScrollAnimation from 'react-animate-on-scroll';
import "./styles/hoverover.css";

import { Spring } from 'react-spring/renderprops'
import DraggableCircle from '../widgets/drag_me';
const btnImage = require('../../images/image008.png');
const thumbsUp = require('../../images/ThumbsUp.png');
const me2Img = require('../../images/m3.png');


const styles = {
    bounce: {
        loop: true,
        autoplay: true, 
        animation: '1s',
        animationName: Radium.keyframes(bounce, 'bouceOut')
    },
    imgStyle :{
        width: '400px',
        height: '300px',
        marginLeft: '-160px',
        marginTop: '-30px',
    },
    containerStyle: {
        color: '#DBE1E4',
        background: '#8BA582',
    },
    btnClickMeStyle : {
        marginTop: '20px',
        // color: '#DBE1E4',
        // background: '#72A98F',
    },
    imgMEStyle: {
		width: '200px',
		height: '200px',
		postion: 'fixed',
	
		bottom: '0',
		right: '0',
    },
    
    c1Style :{
        background: "#8C9373",
        color: "white",
        padding: "1.5rem"
      },

      counter :{
        background: '#2A2D34',
        textAlign: 'center',
        width: '100px',
        borderRadius: '50%',
        margin: '1rem auto'
      }
  }

class Hoverover extends React.Component {
    render() {
        return (
            <div class="container hoverCon" style={styles.containerStyle}>
            <ScrollAnimation
                animateIn="wobble"
                animationName="swing"
                autoplay="true"
                animateOut="zoomInUp"
                
				initiallyVisible={true}>
            <StyleRoot>
                <div class="row" style={styles.bounce} >
                    <div class="col lg1" ><img src={thumbsUp} style={styles.imgStyle} /></div>
                    <div class="col lg6">
                    <img src={me2Img}  style={styles.imgMEStyle} />
                    <div style={styles.btnClickMeStyle}></div>
                    

                   
                    
 
                    </div>
                    <div class="col lg3"> <DraggableCircle/>
                    
                    <Spring
                from={{ opacity: 0, marginTop: -500 }} // "from" fades in when page loads
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 500, duration: 1000 }}
            >
                {props => (
                    <div style={styles.props}>
                        <div style={styles.c1Style}>
                            <h1>Drag</h1>
                            <p>The ball</p>
                            <Spring
                                from={{ number: 0 }}
                                to={{ number: 10 }}
                                config={{ duration: 10000 }}
                            >
                                {props => (
                                    <div style={styles.props}>
                                        <h1 style={styles.counter}>
                                            {props.number.toFixed()}
                                        </h1>
                                    </div>
                                )}
                            </Spring>
                        </div>
                    </div>
                )}
            </Spring>
              
                    </div>
                    
                </div>
            </StyleRoot>
            </ScrollAnimation>
            </div>
        )
    }
}

export default Hoverover;