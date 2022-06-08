import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { device } from '../../../styles/deviceMediaQuery'

const fadeIn = keyframes`
    from { opacity: 0}
    to { opacity: 1}
    `

const fadeOut = keyframes`
    from { opacity: 1}
    to { opacity: 0}
    `

export const Toast = styled.div`
position: fixed;
bottom: ${props => props.bottom ? props.bottom : '20px'};
left: 9px;
z-index: 9;
animation: ${props => props.fade === 'out' ? fadeOut : fadeIn} .3s linear;
visibility: ${props => props.fade === 'out' ? 'hidden' : 'visible'};
transition: visibility linear .3s;
width: ${props => props.width ? props.width : '532px'};
height: ${props => props.height ? props.height : '80px'};
background: white;
border: ${props => props.border ? props.border : '2px solid #29CC74'};
border-radius: ${props => props.borderRadius ? props.borderRadius : '12px'};
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 24px;

@media not all and ${device.desktop}{
    width: 360px;
    height: 96px;
    align-items: flex-start;
}
`

export const TextContainer = styled.div`
display: flex;
margin: 0;
padding: 0;

@media not all and ${device.desktop}{
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
`
