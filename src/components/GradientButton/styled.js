import styled from 'styled-components'

export const ButtonContainer = styled.button`
display: flex;
justify-content: center;
align-items: center;
flex-direction: ${props => props.direction ? props.direction : 'row'};
position: ${props => props.position ? props.position : ''};
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
padding: ${props => props.p ? props.p : '1em'};
margin: ${props => props.m ? props.m : ''};
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : '100px'};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : '20px'};
column-gap: ${props => props.columnGap ? props.columnGap : ''};
background: ${props => props.background ? props.background : '-webkit-linear-gradient(left,#176FEB, #FF80FF)'};
border: none;
border-radius: ${props => props.borderRadius ? props.borderRadius : '20px'};

`