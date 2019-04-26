import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ProfileImage from './profile.png'
import { ModalHeader } from '../constants/styled'

const About = () => (
    <Modal.Content image scrolling>
      <Image wrapped circular size='small' src={ProfileImage} />
      <Modal.Description>
        <ModalHeader>About Me</ModalHeader>
        <p>From creating my first web scraper with Python I knew programming was something I enjoyed. I am a software developer that enjoys solving challenging problems and the process of solving problems. I look forward in expanding my skills and exploring careers in tech. </p>
        <p>These days I have been actively learning C# and .NET Core framework.</p>
      </Modal.Description>
    </Modal.Content>
)

export default About
