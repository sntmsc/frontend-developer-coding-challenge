import styled from 'styled-components'

export const Toast = styled.div`
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