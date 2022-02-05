import media from "styled-media-query"
import styled from "styled-components"
import {Row} from "./Layout"


const TodoList = (props) => {
  return(
    <Row>
      {props.todos && props.todos.map((item, index) => <span key = {index}>{item}</span>)}
    </Row>
  )
}

export default TodoList