import styled from 'styled-components'

export const Flex = styled.div`
display: flex;
justify-content: ${props => props.justify ? props.justify : 'center'};
align-items: ${props => props.align ? props.align : 'center'};
flex-direction: ${props => props.direction ? props.direction : 'row'};
position: ${props => props.position ? props.position : ''};
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
padding: ${props => props.p ? props.p : ''};
margin: ${props => props.m ? props.m : ''};
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : ''};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : ''};
column-gap: ${props => props.columnGap ? props.columnGap : ''};
background: ${props => props.background ? props.background : ''};
background-image: ${props => props.backgroundImage ? props.backgroundImage : ''};
background-repeat: repeat;
border: ${props => props.border ? props.border : ''};
border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
overflow: ${props => props.overflow ? props.overflow : ''};
clip-path: ${props => props.clipPath ? props.clipPath : ''};

`