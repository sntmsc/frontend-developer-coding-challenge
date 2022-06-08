import styled from 'styled-components'
import { device } from '../../../../styles/deviceMediaQuery'

export const Divider = styled.hr`
border:         1px solid #DAE4F2;
height:         59px;
width:          1px;   
margin: 0 40px;
`

export const OptionsContainer = styled.div`
display: flex;
margin-top: 40px;
width: 100%;
justify-content: space-between;
align-items: center;
position: relative;
@media not all and ${device.desktop}{
    margin: 0;
    align-items: flex-start;
    justify-content: space-between;
}
@media ${device.mobile}{
    justify-content:center;
    align-items: center;
    flex-direction: column;
    grid-gap: 26px;
}
`

export const FilterSortContainer = styled.div`
display: flex;
justify-content: flex-start;
margin-right: 140px;

@media not all and ${device.desktop}{
margin-right: 0;
margin-bottom: 20px;
}

@media ${device.mobile}{
    justify-content: center;
    align-items: center;
}
`

export const ConditionalContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media not all and ${device.desktop}{
    display: none;
}
`

export const ConditionalDirection = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 0;

@media not all and ${device.desktop}{
    align-items: flex-start;
    flex-direction: column;
    grid-row-gap: 26.5px;
}

@media ${device.mobile}{
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

export const SortContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: 0;

@media ${device.mobile}{
    flex-direction: column;
    grid-gap: 26.5px;
    justify-content: center;
    align-items: center;
}
`