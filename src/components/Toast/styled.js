import styled from 'styled-components'
import { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
    `

const fadeOut = keyframes`
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
    `

export const Toast = styled.div`
position: fixed;
left: 0;
z-index: 20;
visibility: ${props => props.fade === 'out' ? 'hidden' : 'visible'};
animation: ${props => props.fade === 'out' ? fadeOut : fadeIn} .3s linear;
width: ${props => props.width ? props.width : '532px'};
height: ${props => props.height ? props.height : '80px'};
border: ${props => props.border ? props.border : '2px solid #29CC74'};
border-radius: ${props => props.borderRadius ? props.borderRadius : '12px'};
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px;
`
