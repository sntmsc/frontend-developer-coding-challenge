import * as S from  "./styled"
import Image from "./../../../Image/Image"
import Text from "./../../../Text/Text"
import { useState, useEffect } from 'react'
import fetchHeaders from "../../../../../utils/api/fetchHeaders"

const AeropayButton = ({handleClick}) =>{

    useEffect( ()=>{
        fetch(process.env.API_GET_USER, {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.TOKEN}`
            },
        })
        .then(response => response)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    },[])

    return(
        <S.AeropayButtonContainer
            onClick={handleClick}>
            <Image
            img='./assets/icons/favicon.svg'
            boxSize='28px'
            margin='0 3px 0 0'/>
            <Text
            w='60px'
            weight='600'
            background='gradient'
            userSelect='none'>10000</Text>
            <Image
            img='./assets/icons/chevron-default.svg'
            boxSize='24px'
            transform='rotate(90deg)'
            margin='0 0 0 10px'/>
        </S.AeropayButtonContainer>
    )
}
export default AeropayButton