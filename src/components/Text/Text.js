import * as S from "./styled";

const Text = (props) =>{
    return(
            <S.Text {...props} src={props.img}>{props.children}</S.Text>
    )
}
export default Text