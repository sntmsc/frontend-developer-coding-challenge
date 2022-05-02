import styled from 'styled-components'

export const Flex = styled.div`
flex-wrap: ${props => props.wrap ? props.wrap : 'no-wrap'};
flex-grow: ${props => props.flexGrow ? props.flexGrow : ''};
display: flex;
justify-content: ${props => props.justify ? props.justify : 'center'};
align-items: ${props => props.align ? props.align : 'center'};
flex-direction: ${props => props.direction ? props.direction : 'row'};
position: ${props => props.position ? props.position : ''};
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
padding: ${props => props.p ? props.p : '0'};
margin: ${props => props.m ? props.m : '0'};
margin-top: ${props => props.mt ? props.mt : props.my ? props.my : '0'};
margin-left: ${props => props.ml ? props.ml : props.mx ? props.mx : '0'};
margin-bottom: ${props => props.mb ? props.mb : props.my ? props.my : '0'};
margin-right: ${props => props.mr ? props.mr : props.mx ? props.mx : '0'};
width: ${props => props.boxSize ? props.boxSize : props.w ? props.w : ''};
max-width: ${props => props.maxW ? props.maxW  : ''};
height: ${props => props.boxSize ? props.boxSize : props.h ? props.h : ''};
grid-gap: ${props => props.gap ? props.gap : ''};
column-gap: ${props => props.columnGap ? props.columnGap : ''};
background: ${props => props.background ? props.background : ''};
background-image: ${props => props.backgroundImage ? props.backgroundImage : ''};
background-repeat: repeat;
border-top: ${props => props.borderTop ? props.borderTop : ''};
border: ${props => props.border ? props.border : ''};
border-radius: ${props => props.borderRadius ? props.borderRadius : ''};
box-shadow: ${props => props.boxShadow ? props.boxShadow : ''};
transform: ${props => props.transform ? props.transform : ''};
overflow: ${props => props.overflow ? props.overflow : ''};
cursor: ${props => props.cursor ? props.cursor : ''};
clip-path: ${props => props.clipPath ? props.clipPath : ''};
z-index: ${props => props.zIndex ? props.zIndex : ''};
&:hover,
&:focus{
    background: ${props => props.hoverBackground ? props.hoverBackground : ''};
}

`