import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Menu,Grid, Image, Icon } from 'semantic-ui-react'
// import './NavMenu.css'

export default class LeftMenu extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid.Column width={4}>
      <Menu fluid vertical tabular>
        <Image />
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as={NavLink} exact to="/" />
        <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick}
        as={NavLink}
        exact to="/projects" />


      </Menu>
    </Grid.Column>
    )
  }
}
