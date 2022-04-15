import * as S from "./styled";

const Image = (props) =>{
    return(
            <S.Image {...props} src={props.img}></S.Image>
    )
}
export default Image