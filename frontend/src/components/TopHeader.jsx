import theme from "../theme"
import styled from "styled-components"
import media from "styled-media-query"
import {GrFormRefresh} from "react-icons/gr"
import {Button} from "./Layout"

const HeaderContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h4 {
    text-align: start;
    font-size: 2.2rem;
  }
  
  ${media.lessThan("medium")`
    & > h4 {
      width: 30%;
      font-size: 0.8rem;
    }
  `}
`

const TopHeader = () => {
  return(
    <HeaderContainer>
      <h4>Todo Application</h4>
      <Button
        onClickFunction = {() => window.location.reload()}
        color = "black"
        width = "45%"
        pad = "0.9rem 0.7rem"
        bg = {theme.light}
        header = "Refresh"
        icon = {<GrFormRefresh />}
        fontSize = "0.6rem"
        iconSize = "1rem" />
    </HeaderContainer>
  )
}

export default TopHeader