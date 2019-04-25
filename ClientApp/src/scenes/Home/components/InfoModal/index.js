import React from 'react'
import { Button, Header, Icon, Image, Modal, Grid } from 'semantic-ui-react'
import { BiggerIcon, FixedButton } from './styled.js';
import "./InfoModal.css"
import LeftMenu from './components/LeftMenu'

const ModalScrollingExample = () => (
  <Modal className='centered' size='fullscreen' closeIcon trigger={<FixedButton icon><BiggerIcon name='align justify' /></FixedButton>}>
    <Modal.Header>Information</Modal.Header>
    <Grid>
    <LeftMenu />
    <Grid.Column width={12}>
      <Modal.Content image scrolling>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Modal.Description>
          <Header>Modal Header</Header>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
          <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
        </Modal.Description>
      </Modal.Content>
    </Grid.Column>
    </Grid>

    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalScrollingExample
