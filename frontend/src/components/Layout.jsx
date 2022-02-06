import theme from "../theme"
import media from "styled-media-query"
import styled from "styled-components"


export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.dark};
`

export const Container = styled.div`
  width: ${props => props.width ? props.width : "50%"};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan("medium")`
    width: ${props => props.smallWidth ? props.smallWidth : "80%"};
  `}
`

export const Row = styled(Container)`
  width: 100%;
  height: ${props => props.height ? props.height : "auto"};
  justify-content: center;
`

const StyledButton = styled.button`
  width: ${props => props.width ? props.width : "auto"};
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${props => props.pad ? props.pad : "10px 18px"};
  background-color: ${props => props.bg ? props.bg : theme.gray};
  border: ${props => props.border ? props.border : "none"};
  border-radius: ${props => props.rad ? props.rad : "5px"};
  transition: 0.2s ease;
  
  & > span {
    color: ${props => props.color ? props.color : theme.blue};
  }

  & > .btn-text {
    font-size: ${props => props.fontSize ? props.fontSize : "0.8rem"};
  }

  & > .btn-icon {
    position: relative;
    top: 2px;
    font-size: ${props => props.iconSize ? props.iconSize : "1rem"};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  ${media.greaterThan("medium")`
    width: 25%;
    & > .btn-text {
      font-size: 1rem;
    }
  `}

  ${media.lessThan("medium")`
    padding: 0.5rem 0.45rem;
  `}
`

export const Button = (props) => {
  return(
    <StyledButton
        pad = {props.pad}
        bg = {props.bg}
        border = {props.border}
        rad = {props.rad}
        fontSize = {props.fontSize}
        color = {props.color}
        width = {props.width}
        iconSize = {props.iconSize}
        onClick = {props.onClickFunction}
      >
      <span className = "btn-text">{props.header}</span>
      {props.icon && <span className = "btn-icon">{props.icon}</span>}
    </StyledButton>
  )
}