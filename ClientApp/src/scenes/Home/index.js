import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Icon, Image, Grid, Container, Transition } from 'semantic-ui-react'

import YoutubeBackground from 'react-youtube-background'
import "./Home.css"

import ProjectBanner from '../../components/ProjectBanner'
import InfoModal from './components/InfoModal'

import { BigWord  } from './styled.js';

import MediaQuery from 'react-responsive';

class Home extends Component{
  constructor(props){
    super(props)
    this.timer = null;
    this.state= {
      animation: 'slide right',
      duration: 400,
      visible: false,
      visibleTwo: false,
      bannerVisible: false
    }
    this.handleVisibility = this.handleVisibility.bind(this)
  }



  // first have written content appear then projects and last hamburger menu
  handleVisibility(){
    this.setState({ visible: !this.state.visible });

    this.timer = setTimeout(
      function() {
        this.setState({ visibleTwo: !this.state.visibleTwo });
      }
      .bind(this),
      500
  );

    this.timer = setTimeout(
      function() {
        this.setState({ bannerVisible: !this.state.bannerVisible });
      }
      .bind(this),
      1000
  );
  }

  componentWillUnmount() {
    // Make sure to clear the interval, on unmount
    clearInterval(this.timer);
 }




  render(){
    const { animation, duration, visible, visibleTwo, bannerVisible } = this.state
    return(
        <YoutubeBackground
        // videoId={"atqBhyqq6xE"}     // default -> "jssO8-5qmag"
        videoId={"0ROpUxGoa-0"}
        // aspectRatio={"1:1"} // default -> "16:9"
        // overlay={string}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
        className={"video-background"}   // defaults -> null
        onReady={this.handleVisibility}       // defaults -> null\

      >
      <Container>
        <Grid stackable>
          <Grid.Row className="nowrap">
            <Grid.Column>
            <h5>Lee
              <br></br>
              Productions
            </h5>
            </Grid.Column>
            <Grid.Column>
                <InfoModal />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="marginRow" verticalAlign="bottom">
            <Grid.Column width={9}>

              <Transition.Group animation={animation} duration={duration}>
                {visible && <p>무제한 <BigWord>솔루션</BigWord></p> }
                {visible && <p>천 <BigWord>코드</BigWord></p>}
                {visible &&
                  <p className={"specialPara"}>
                    <span className={"stripedBack"}>루덴에서 사피엔스로</span>
                  </p>}
              </Transition.Group>

              <Transition.Group animation={animation} duration={duration}>
              {visibleTwo && <button className="redButton inline-block">INFORMATION</button>}
                  {visibleTwo && <p className="buttonPara inline-block">Current Project</p>}
              </Transition.Group>

            </Grid.Column>
            {/* if the screen size is 1224 or more it will show the project banner */}
            <MediaQuery minWidth={1200}>
            <Grid.Column width={7}>
              <Transition visible={bannerVisible} animation='scale' duration={800}>
                <Image.Group size="small">
                  <ProjectBanner />
                </Image.Group>
              </Transition>
            </Grid.Column>
            </MediaQuery>

          </Grid.Row>
          <Grid.Row>
            <Grid.Column className="footerColumn">
            <Transition.Group animation={animation} duration={duration}>
            {visibleTwo &&
              <div>
              Contact /
                <a href="https://www.linkedin.com/in/robinlee64/">
                  <Icon link name='linkedin' />
                </a>
                <a href="https://github.com/HamonOverdrive">
                  <Icon link name='github' />
                </a>
              </div>}

              {visibleTwo &&
                <div className="borderBottom">
                </div>}

              {visibleTwo &&  <div>
                &#169; Lee Productions.
              </div>}

              </Transition.Group>
            </Grid.Column>
          </Grid.Row>
          {/* </MediaQuery> */}


        </Grid>
        </Container>
      </YoutubeBackground>
    );
    }
}
export default connect()(Home);
