import styled from 'styled-components'

export const Flex = styled.div`
display: flex;
padding: ${props => props.p ? props.p : '.5em'};
justify-content: center;
width: ${props => props.w ? props.w : ''};
height: ${props => props.h ? props.h : ''};
`