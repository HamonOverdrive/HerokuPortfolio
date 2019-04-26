import React from 'react'
import { Button, Header, Image, Modal, Item } from 'semantic-ui-react'
import Pandemic from '../../../../Pandemic.png'
import CageShopper from '../../../../CageShopper.png'


const Projects = () => (
    <Modal.Content image>
      <Modal.Description>
        <Header>Projects</Header>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src={CageShopper} />

            <Item.Content>
              <Item.Header>Cage Shopper</Item.Header>
              <Item.Meta>
                <span className='price'>$1200</span>
                <span className='stay'>1 Month</span>
              </Item.Meta>
              <Item.Description>
                <p> Fully functional e-commerce website selling Nicholas Cage products</p>
                <p>-Backend utilizes Node.js and Sequelize to handle postgresql models such as user data models for login/logout features and cart functionality.</p>
                <p>-Frontend using React and Redux to change states for users and display correct data on the frontend.
Try at https://cageshopper.herokuapp.com/</p>
              </Item.Description>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src={Pandemic} />

            <Item.Content>
              <Item.Header>Pandemic Code Red</Item.Header>
              <Item.Meta content='$1000 2 Weeks' />
              <Item.Description>
                <p> Pandemic board game web application version of the game</p>
                <p>- Built with React front end and Firebase for database manipulation for changes of state of board game.</p>
                <p>- Visual map displays using React simple maps library with svg manipulation done on frontend.</p>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Modal.Description>
    </Modal.Content>
)

export default Projects
