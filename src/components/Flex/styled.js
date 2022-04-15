import styled from 'styled-components'

export const Flex = styled.div`
display: flex;
justify-content: ${props => props.justify ? props.justify : 'center'};
align-items: center;
padding: ${props => props.p ? props.p : '.5em'};
width: ${props => props.w ? props.w : ''};
height: ${props => props.h ? props.h : ''};
`