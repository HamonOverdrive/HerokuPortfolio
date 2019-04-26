import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ProfileImage from './profile.png'

const About = () => (
    <Modal.Content image>
      <Image wrapped circular size='small' src={ProfileImage} />
      <Modal.Description>
        <Header>About Me</Header>
        <p>From creating my first web scraper with Python I knew programming was something I enjoyed. I am a software developer that growing new technologies absolutely excite me to learn more about software development and the problems I will be able to solve with them. I look forward in expanding my skills and exploring careers in tech. </p>
        <p>These days I have been actively learning C# and .NET Core framework.</p>
      </Modal.Description>
    </Modal.Content>
)

export default About
