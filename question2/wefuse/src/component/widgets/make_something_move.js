import React from 'react';
import Button from '../element/button/Button';
import "./styles/hoverover.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Card from './swipe_me';


const megaPhone = require('../../images/Megaphone.png');
const cloudImg = require('../../images/Cloud.png');


const styles = {
    containerStyle :{
        background: '#8BA582',
        paddingTop: '26px',
        text: 'center',
        width: '35%',
        height: '391px',
        paddingBottom: '30px',
    },
    containerStyle2 :{
        background: '#8BA582',
        paddingTop: '10px',
        width: '62%',
        height: '390px',
        text: 'center',
        paddingBottom: '30px',
    },
    imgStyle : {
        width: '400px',
        height: '300px',
        marginLeft: '-120px',
        marginTop: '-20px',
    },

    imgStyle2 : {
        width: '250px',
        height:'250px',
        marginRight: '-420px',
        marginTop: '-330px',
    },

    c1Style :{
        background: "steelblue",
        color: "white",
        padding: "1.5rem"
      },

      counter :{
        background: '#333',
        textAlign: 'center',
        width: '50px',
        borderRadius: '50%',
        margin: '1rem auto'
      },

      cardMeStyle:{
        width: '300px',
        height: '300px',
      },

      myStyle:{
        marginTop: '-50px',
        marginRight: '350px',
        }

}

const cardContents = [
    {
      title: 'Card1',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      image: {
        thumb: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg',
        full: 'http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg'
      }
    },

  ]
  
class MakeSomethingMove extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          // show: true
          list: []
        }
      }
    
      handleClick() {
        this.setState(prevState => ({
          // show: this.state.show ? false : true
          list: [...prevState.list, 'item']
        }))
      }
      render(){
  return (
     
         <div class="container ">
             <div class="row">
                 <div class="col lg2 hoverCon" style={styles.containerStyle}>
                 <img src={megaPhone} style={styles.imgStyle} />
                 </div>
                 <div class="col lg1"></div>
                 <div class="col lg9 hoverCon" style={styles.containerStyle2}>
                 <p>Card Effects</p>
                 <div className="container " style={styles.cardMeStyle}>
          {
            cardContents.map((card, i) => <Card key={i} i={i} {...card} />)
           
          }
        </div>
                    
                    

                     <img src={cloudImg} style={styles.imgStyle2} />
                     <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                timeout={1000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = 'blue'
                }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button class="btn waves-effect waves-teal" style={styles.myStyle} onClick={() => this.handleClick()}>Toggle</button>
                 </div>
             </div>
             
         </div>
)}}

export default  MakeSomethingMove;