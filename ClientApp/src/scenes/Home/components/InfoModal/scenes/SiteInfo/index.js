import React from 'react'
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'


const SiteInfo = () => (
    <Modal.Content>
      <Modal.Description>
        <Header>Site Information</Header>
        <p>This portfolio website was made with React, and .NET core.</p>
        <p>Some notable libraries used to build this are react-youtube-background and styled components.</p>
      </Modal.Description>
    </Modal.Content>
)

export default SiteInfo
