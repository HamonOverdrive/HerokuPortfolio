import React, {Component} from 'react';
import { Button, Header, Icon, Image, Modal, Grid, Menu, Transition } from 'semantic-ui-react';
import { BiggerIcon, FixedButton } from './styled.js';
import "./InfoModal.css"

// import all the modal content scenes
import About from './scenes/About'
import Projects from './scenes/Projects'
import SiteInfo from './scenes/SiteInfo'


class ModalScrollingExample extends Component{
  constructor(){
    super()
    this.state = {
      activeItem: 'about'
    }

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render(){
    const { activeItem } = this.state


    const CONTENT_STATES = {
      'about':<About />,
      'projects': <Projects />,
      'site': <SiteInfo />
    }


  return(
    <Modal className='centered' size='fullscreen' closeIcon trigger={
    <FixedButton icon>
      <BiggerIcon name='align justify' />
    </FixedButton>}>
      <Modal.Header>Information</Modal.Header>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Image />
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
            <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
            <Menu.Item name='site' active={activeItem === 'site'} onClick={this.handleItemClick}>Site Info</Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          {CONTENT_STATES[activeItem]}
        </Grid.Column>
      </Grid>

      <Modal.Actions>
        <a href="https://github.com/HamonOverdrive">
        <Button color='black'>
          <Icon name='github' /> Github
        </Button>
        </a>
        <a href="https://www.linkedin.com/in/robinlee64/">
        <Button color='linkedin'>
          <Icon name='linkedin' /> LinkedIn
        </Button>
        </a>
      </Modal.Actions>
    </Modal>
  )};

}
export default ModalScrollingExample
