import React from 'react';
import { connect } from 'react-redux';

import { Header, Icon, Divider, Image, Segment, Grid, Container, Label } from 'semantic-ui-react'

import YoutubeBackground from 'react-youtube-background'
import "./Home.css"
import CageShopper from './CageShopper.png'
import Pandemic from './Pandemic.png'

import ProjectBanner from '../../components/ProjectBanner'

const Home = props => (
    <YoutubeBackground
    videoId={"atqBhyqq6xE"}     // default -> "jssO8-5qmag"
    // aspectRatio={"1:1"} // default -> "16:9"
    // overlay={string}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
    className={"video-background"}   // defaults -> null
    // onReady={func}       // defaults -> null

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
          <p>무제한 <span className={"bigWord"}>솔루션</span></p>
          <p>천 <span className={"bigWord"}>코드</span></p>
          <p className={"specialPara"}>
            {/* <span className="bracket">[</span> */}
            <span className={"stripedBack"}>루덴에서 사피엔스로</span>
            {/* <span className="bracket">]</span> */}
          </p>
          <button class="redButton">INFORMATION</button> <p className={"buttonPara"}>Current Project</p>
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

export default connect()(Home);
