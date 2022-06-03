import styled from 'styled-components'
import { device } from './../../../../styles/deviceMediaQuery'

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: white;
box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.08);
width: 348px;
height: 433px;
border: 1px solid #DAE4F2;
border-radius: 16px;
margin-bottom: 16px;

@media not all and ${device.desktop}{
    width: 314.33px;
}
`
const textProperties = `
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 600;
line-height: 150%; 
align-self: stretch;
flex-grow: 0;
margin: 0;
padding: 0;
`
export const ProductName = styled.p`
${textProperties}
color: #252F3D;
font-size: 18px;



@media (max-width: 1023px){
    font-size: 16px;
}
`

export const ProductDescription = styled.p`
${textProperties}
font-size: 14px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #7C899C;

@media (max-width: 1023px){
    font-size: 12px;
}
`