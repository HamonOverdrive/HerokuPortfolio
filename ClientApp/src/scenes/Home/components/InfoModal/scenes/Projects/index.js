import React from 'react'
import { Button, Header, Image, Modal, Item } from 'semantic-ui-react'
import Pandemic from '../../../../Pandemic.png'
import CageShopper from '../../../../CageShopper.png'
import { ModalHeader } from '../constants/styled'

const Projects = () => (
    <Modal.Content image scrolling>
      <Modal.Description>
        <ModalHeader>Projects</ModalHeader>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src={CageShopper} />

            <Item.Content>
              <Item.Header as="a" href="https://cageshopper.herokuapp.com/">Cage Shopper</Item.Header>
              <Item.Meta>
                <span className='price'>January 2019</span>
              </Item.Meta>
              <Item.Description>
                <p> Fully functional e-commerce website selling Nicholas Cage products</p>
                <p>-Backend utilizes Node.js and Sequelize to handle postgresql models such as user data models for login/logout features and cart functionality.</p>
                <p>-Frontend using React and Redux to change states for users and display correct data on the frontend.</p>
                <p>-Github Repo: https://github.com/CageNation/Cage-Shopper</p>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={Pandemic} />

            <Item.Content>
              <Item.Header as="a" href="https://dev-pandemic.firebaseapp.com/">Pandemic Code Red</Item.Header>
              <Item.Meta content='February 2019' />
              <Item.Description>
                <p> Pandemic board game web application version of the game</p>
                <p>- Built with React front end and Firebase for database manipulation for changes of state of board game.</p>
                <p>- Visual map displays using React simple maps library with svg manipulation done on frontend.</p>
                <p>-Github Repo: https://github.com/PandemicCodeRed/PandemicCodeRed</p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Modal.Description>
    </Modal.Content>
)

export default Projects
