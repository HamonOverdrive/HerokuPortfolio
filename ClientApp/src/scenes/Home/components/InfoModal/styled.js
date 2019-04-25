import styled from 'styled-components';
import {Transition, Button, Icon } from 'semantic-ui-react'

export const BiggerIcon = styled(Icon)`

  && {
    font-size: 1.4em;
  }
`

export const FixedButton = styled(Button)`
  position: fixed;
  right: 0;
  background-color: transparent;
  &&&{
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAFUlEQVQImWNgQAIXLlyYSSqHgYEBAJ5lDCXPOM2+AAAAAElFTkSuQmCC) repeat;
    color: white;
    padding-right: 5rem;
    margin: 0;
  }


  &:hover {
    &&&{
      background: none;
      background-color: white;
      color: black;
    }

}

`



export const FixedRightAnchor = styled.a`
width: 112;
height: 40;
background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAFUlEQVQImWNgQAKvGbTPkMphYGAAAADHB4lgKXDGAAAAAElFTkSuQmCC) repeat;
`;
