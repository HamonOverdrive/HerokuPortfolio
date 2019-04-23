import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header, Icon, Divider, Image, Segment, Grid, Container, Label, Transition } from 'semantic-ui-react'

import YoutubeBackground from 'react-youtube-background'
import "./Home.css"

import ProjectBanner from '../../components/ProjectBanner'


class Home extends Component{
  constructor(props){
    super(props)
    this.state= {
      animation: 'slide right',
      duration: 800,
      visible: false,
      visibleTwo: false
    }
    this.handleVisibility = this.handleVisibility.bind(this)
  }



  handleVisibility(){
    this.setState({ visible: !this.state.visible });
    setTimeout(
      function() {
        this.setState({ visibleTwo: !this.state.visibleTwo });
      }
      .bind(this),
      2000
  );
  }



  render(){
    const { animation, duration, visible, visibleTwo } = this.state
    return(
        <YoutubeBackground
        videoId={"atqBhyqq6xE"}     // default -> "jssO8-5qmag"
        // aspectRatio={"1:1"} // default -> "16:9"
        // overlay={string}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
        className={"video-background"}   // defaults -> null
        onReady={this.handleVisibility}       // defaults -> null\

      >
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
            <h5>Lee
              <br></br>
              Productions
            </h5>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="marginRow" verticalAlign="bottom">
            <Grid.Column width={9}>
              <Transition.Group animation={animation} duration={duration}>
                {visible && <p>무제한 <span className={"bigWord"}>솔루션</span></p> }
                {visible && <p>천 <span className={"bigWord"}>코드</span></p>}
                {visible &&
                  <p className={"specialPara"}>
                    <span className={"stripedBack"}>루덴에서 사피엔스로</span>
                  </p>}

              </Transition.Group>

              {/* need to make this group inline-block transition group is making display:block */}
              <Transition.Group animation={animation} duration={duration}>
              {visibleTwo && <button className="redButton">INFORMATION</button>}
                  {visibleTwo && <p className={"buttonPara"}>Current Project</p>}
              </Transition.Group>

              {/* <button className="redButton">INFORMATION</button> <p className={"buttonPara"}>Current Project</p> */}
            </Grid.Column>
            <Grid.Column width={7}>
              <Image.Group size="small">
                <ProjectBanner />
              </Image.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column className="footerColumn">
              <div>
              Contact /
                <a href="https://www.linkedin.com/in/robinlee64/">
                  <Icon link name='linkedin' />
                </a>
                <a href="https://github.com/HamonOverdrive">
                  <Icon link name='github' />
                </a>

              </div>
              <div className="borderBottom">
              </div>
              <div>
                &#169; Lee Productions.
              </div>
            </Grid.Column>
          </Grid.Row>

        </Grid>
        </Container>
      </YoutubeBackground>
    );
    }
}
export default connect()(Home);
