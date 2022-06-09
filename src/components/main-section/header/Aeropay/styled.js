import styled from 'styled-components'
import { keyframes } from 'styled-components'


const fadeIn = keyframes`
    from { opacity: 0}
    to { opacity: 1}
    `

const fadeOut = keyframes`
    from { opacity: 1}
    to { opacity: 0}
    `

export const AeropayContainer = styled.div`
display: flex;
width: 312px;
height: 404px;
border: 1px solid #DAE4F2;
border-radius: 16px;
box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
position: absolute;
top: 99%;
right: 0;
animation: ${props => props.fade === 'out' ? fadeOut : fadeIn} .3s linear;
visibility: ${props => props.fade === 'out' ? 'hidden' : 'visible'};
transition: visibility linear .3s;
z-index: 8;
background: white;
flex-direction: column;
justify-content: flex-start;

`