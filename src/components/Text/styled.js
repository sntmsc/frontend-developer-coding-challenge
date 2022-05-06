import styled from 'styled-components'

export const Text = styled.p`
margin:${props => props.m ? props.m : '0'};
margin-top: ${props => props.mt ? props.mt : props.my ? props.my : '0'};
margin-left: ${props => props.ml ? props.ml : props.mx ? props.mx : '0'};
margin-bottom: ${props => props.mb ? props.mb : props.my ? props.my : '0'};
margin-right: ${props => props.mr ? props.mr : props.mx ? props.mx : '0'};
padding:0;
width: ${props => props.w ? props.w : ''};
background: ${props => props.background === 'gradient' ?
            'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);' : 
            props.background ?
            props.background : ' #7C899C'};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: 'Montserrat', sans-serif;
font-size: ${props => props.fontSize ? props.fontSize : '18px'};
font-weight: ${props => props.weight ? props.weight : '600'};
line-height: ${props => props.lineHeight ? props.lineHeight : '150%'};
letter-spacing: ${props => props.spacing ? props.spacing : '0%'};
text-style: none;
text-align: ${props => props.textAlign ? props.textAlign : 'center'};
user-select:  ${props => props.userSelect ? props.userSelect : '' };
position: ${props => props.position ? props.position : ''};
left: ${props => props.left ? props.left : ''};
right: ${props => props.right ? props.right : ''};
top: ${props => props.top ? props.top : ''};
bottom: ${props => props.bottom ? props.bottom : ''};
`
