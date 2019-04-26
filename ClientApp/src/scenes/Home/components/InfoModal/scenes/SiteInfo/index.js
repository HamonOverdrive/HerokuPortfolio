import React from 'react'
import { Button, Header, Image, Modal, Segment } from 'semantic-ui-react'
import { ModalHeader } from '../constants/styled'

const SiteInfo = () => (
    <Modal.Content scrolling>
      <Modal.Description>
        <ModalHeader>Site Information</ModalHeader>
        <p>This portfolio website was made with React, and .NET core.</p>
        <p>Some notable libraries used to build this are react-youtube-background and styled components.</p>
        <p>Site is meant to be viewed fullscreen for best results.</p>
      </Modal.Description>
    </Modal.Content>
)

export default SiteInfo
