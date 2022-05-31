import styled from 'styled-components'
import { device } from '../../../../../styles/deviceMediaQuery'

export const DescriptionText = styled.p`
margin:${props => props.m ? props.m : '0'};
padding:0;
width: ${props => props.w ? props.w : ''};
background: #7C899C;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: 'Montserrat', sans-serif;
font-size: ${props => props.fontSize ? props.fontSize : '18px'};
font-weight: ${props => props.weight ? props.weight : '600'};
line-height: ${props => props.lineHeight ? props.lineHeight : '150%'};
letter-spacing: ${props => props.spacing ? props.spacing : '0%'};
text-style: none;
text-align: ${props => props.textAlign ? props.textAlign : 'center'};
user-select:  ${props => props.userSelect ? props.userSelect : 'none' };

@media not all and ${device.desktop}{
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    text-align: center;
}
`

export const DescriptionTitle = styled.p`
background: ${props => props.background === 'gradient' ?
            'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);' : 
            props.background };
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding: 0;
margin:${props => props.m ? props.m : '0'};
font-family: 'Montserrat', sans-serif;
font-size: 200px;
font-weight: 900;
line-height: 80%;
text-style: none;
text-align: center;
user-select:none;

@media not all and ${device.desktop}{
    font-size: 96px;
}
`

export const DescriptionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
max-width: 602px;
z-index: 2;

@media not all and ${device.desktop}{
    align-items: center;
    max-width: 289px;
    margin-bottom:11em;
    margin-top: 0;
}
`

export const DescriptionButton = styled.div`
width: 318px;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
background: -webkit-linear-gradient(left,#176FEB, #FF80FF);
cursor: pointer;
border-radius: 24px;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);

@media not all and ${device.desktop}{
    width: 303px;
    height: 64px;
    margin-top: 40px;
}
`

