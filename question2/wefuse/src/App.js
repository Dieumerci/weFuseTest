import React, { Component } from 'react';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'materialize-css/dist/css/materialize.min.css';
import { Container, Row, Col } from 'react-grid-system';
import Navbar from './component/common/navbar/navbar';
import Footer from './component/common/footer/Footer';
import Example from './component/widgets/plxScrollEffect';
import Hoverover from './component/widgets/hoverover';
import MakeSomethingMove from './component/widgets/make_something_move';
import MyMotion from './component/widgets/my_motion';
import DraggableCircle from './component/widgets/drag_me';
import BannerIndex from './component/widgets/banner';

const imgPurple = require('../src/images/FloppyPurple.png');
const imgMint = require('../src/images/FloppyMint.png');
const me2Img = require('../src/images/m2.png');

const styles = {
	imgStyle: {
		width: '200px',
		height: '200px',
	},
	containerStyle: {
		background: '#382970',
		paddingTop: '20px',
	
		text: 'center',
		paddingBottom: '20px',
	},

	forTextFontP1:{
		fontFamily: "Times New Roman",
		fontSize:'1.2vw',
		textAlign:'center',
	},

	forTextFontP:{
		fontFamily: "Times New Roman",
		fontSize:'1.4vw',
		textAlign:'center',
	},

	todoAnimation : {
		// width: '500px'
	},
	imgMEStyle: {
		width: '200px',
		height: '200px',
		postion: 'fixed',
	
		bottom: '0',
		right: '0',
	},
};


class App extends Component {
	

	
	render() {
		// const props = useSpring({ height })
		
		return (
			
			<div className="App">
				<div>
					<Navbar/>
				</div>
        <div>
          <Container>
            <Row>
              <Col lg={1}>
              <ul>
              <li id="rotate-text">Twitter</li>
              <li id="rotate-text">Instagram</li>
              <li id="rotate-text">Facebook</li>  
              </ul>
                {/* <leftSideNavBar/> */}
              </Col>
              <Col lg={10}>
              <Example/>
              </Col>
              <Col lg={1}>
              </Col>

            </Row>
          </Container>
        </div>
				{/* <div>
					<Example/>
				</div> */}
				<div style={styles.containerStyle}>
					<Container>
						<Row>
							<Col lg={2}>
								<div>
									<ScrollAnimation
										animateIn="fadeInRight" animateOut="fadeOutLeft" initiallyVisible={true}>
										<img src={imgMint} style={styles.imgStyle} />
									</ScrollAnimation>
								</div>
							</Col>
							<Col lg={2}>
								<div>
									<ScrollAnimation
										animateIn="fadeInRight" animateOut="fadeOutLeft" initiallyVisible={true}>
										  <img src={imgPurple} style={styles.imgStyle} />
									</ScrollAnimation>
								</div>
							</Col>
              <Col lg={1}></Col>
              <Col lg={7}>
								<div>
									<ScrollAnimation
										animateIn="fadeInLeft"
										animateOut="fadeOutRight"
										initiallyVisible={true}>
                    
										<blockquote style={styles.forTextFontP} class="lead text-muted">When UX doesn’t consider ALL users, shouldn’t it be known as “SOME User Experience” or… SUX?</blockquote>
                    <p class="right" style={styles.forTextFontP1}>- Billy Gregory</p>
									</ScrollAnimation>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			

				<div>
          <br></br>
          <br></br>
          <br></br>
					
					<Hoverover/>
				</div>
				
			
        <div>
          
					<MakeSomethingMove/>
          <br></br>
          <br></br>
          <br></br>
				</div>


				<div class="container" style={styles.todoAnimation}><MyMotion/><br></br><br></br><br></br></div>

				<div >
					<Footer/>
				</div>
				
			</div>
		);
	}
}

export default App;
