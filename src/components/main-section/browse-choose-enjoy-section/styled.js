import styled from 'styled-components'
import { device } from '../../../../styles/deviceMediaQuery'

export const CardsContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
position: relative;
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
padding: 0;
margin: 0;
width: 100%;
background: linear-gradient(102.47deg, rgba(23, 111, 235, .5) -5.34%,
            rgba(255, 128, 255, .5) 106.58%);

@media not all and ${device.desktop}{
    bottom: 14.1rem;
    padding: 11em 0 2em 0;
    grid-gap: 8px;
    align-items: flex-end;
    flex-wrap: wrap;
}
`

export const WalkthroughContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
position: relative;
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
padding: 12px;
background: white;
margin: 0;
border: 1px solid #DAE4F2;
border-radius: 32px;
box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
transform: ${props => props.transform ? props.transform : ''};
z-index: ${props => props.zIndex ? props.zIndex : ''};
height: 676px;
width: 532px;

@media not all and ${device.desktop}{
    position: static;
    height: 477px;
    width: 323px;
    transform: rotate(0deg);
    bottom: 0;
    right: 0;
    left: 0;
    background:rgba(255,255,255, 0.7);
    z-index: 4;
}
`

export const WalkthroughImage = styled.img`
object-fit: cover;
content:url(${props => props.img});
opacity: ${props => props.opacity ? props.opacity :  ''};
border-top-left-radius: 32px;
border-top-right-radius: 32px;
width: 508px;
height: 498px;
background: linear-gradient(102.47deg, #7296EB -5.34%,
            #EAC0E9 106.58%, #EAC0E9 106.58%);

@media not all and ${device.desktop}{
    width: 299px;
    height: 314px;
}
`

export const WalkthroughIcon = styled.img`
content:url(${props => props.img});
width: 48px;
height: 48px;

@media not all and ${device.desktop}{
    width: 37px;
    height: 37px;
    border: solid 3px #E5F0FF;
    border-radius: 8px;
    content:url(./assets/icons/walkthrough-1.svg);
}
`

export const WalkthroughTitle = styled.p`
background: ${props => props.background === 'gradient' ?
            'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);' : 
            props.background };
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding: 0;
margin:${props => props.m ? props.m : '0'};
font-family: 'Montserrat', sans-serif;
font-size: 32px;
font-weight: 900;
line-height: 80%;
text-style: none;
text-align: center;
user-select:none;

@media not all and ${device.desktop}{
    font-size: 24px;
}
`