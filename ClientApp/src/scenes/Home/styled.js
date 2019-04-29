import styled from 'styled-components';
import {Transition } from 'semantic-ui-react'

export const T = styled(Transition)`
`

export const TransitionDiv = styled.div`
  display:flex;
`

export const BigWord = styled.span`
  font-size: 200%;
`

export const PlainA = styled.a`
  color: white;

  &:hover{
    color: white;
    text-decoration: none;
  }
`


export const Section = styled.main`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  margin-bottom: 20px;
`;
