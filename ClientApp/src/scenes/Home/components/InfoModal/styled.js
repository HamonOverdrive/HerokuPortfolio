import styled from 'styled-components';
import {Transition, Button, Icon } from 'semantic-ui-react'

export const BiggerIcon = styled(Icon)`
  font-size: 1.4em !important;
`

export const FixedButton = styled(Button)`
position: fixed;
right: 0;
background-color: transparent;
background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAFUlEQVQImWNgQAIXLlyYSSqHgYEBAJ5lDCXPOM2+AAAAAElFTkSuQmCC) repeat !important;
color: white !important;
padding-right: 5rem !important;
margin: 0 !important;

&:hover {
  background: none !important;
  background-color: white !important;
  color: black !important;
}

`



export const FixedAnchor = styled.a`
width: 112;
height: 40;
background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAFUlEQVQImWNgQAKvGbTPkMphYGAAAADHB4lgKXDGAAAAAElFTkSuQmCC) repeat;

`;
