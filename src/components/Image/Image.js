import * as S from "./styled";

const Image = (props) =>{
    return(
            <S.Image {...props} src={props.img} alt={props.alt}></S.Image>
    )
}
export default Image