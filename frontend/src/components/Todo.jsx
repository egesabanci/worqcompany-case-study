import theme from "../theme"
import moment from "moment"
import server from "../server.config.json"
import axios from "axios"
import {useState} from "react"
import styled from "styled-components"
import media from "styled-media-query"
import {AiOutlineEdit} from "react-icons/ai"
import {AiFillCheckCircle} from "react-icons/ai"


const TodoComponent = styled.span`
  width: 100%;
  height: auto;
  margin: 1vh 0;
  padding: 10px 15px;
  font-size: 0.8rem;
  background-color: ${theme.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  text-decoration: ${props => props.checked ? "line-through" : "none"};
  text-decoration-color: ${theme.black};
  
  & > span {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  & > span > * {
    color: ${theme.black};
  }

  & > .content > p > b {
    color: ${theme.black};
    font-weight: bolder;
  }

  & > .content {
    width: 22%;
    align-items: flex-start;
    flex-direction: column;
  }
  
  & > .description {
    width: 60%;
  }

  & > .content > p {
    font-size: 0.6rem;
    color: ${theme.gray}
  }

  & > .actions {
    width: 15%;
  }

  & > .actions > p > * {
    font-size: 1.3rem;
  }

  & > .actions > p > *:hover {
    cursor: pointer;
  }

  ${media.lessThan("medium")`
    flex-direction: column;
  
    & > .content {
      width: 100%;
    }

    & > .description {
      width: 100%;
      margin-top: 2vh;
    }

    & > .content > .text-show:hover {
      cursor: pointer;
    }

    & > .actions {
      width: 90%;
      height: 100%;
      margin: 3vh 0 1.5vh 0;
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`

const Todo = (props) => {
  const [isShowAll, setShowAll] = useState(false)
  const [isChecked, setChecked] = useState(props.status)

  const handleChecked = async (todoId) => {
    axios.post(server.updateTodoStatus, {id: todoId, status: !isChecked})
    .then(res => console.log(res))
    .catch(err => console.error(err))
    setChecked(!isChecked)
  }

  const handleTodoEdit = (todoId) => {
    let newTitle = prompt("New to-do title:")
    let newDescription = prompt("New to-do description:")

    let data = {
      id: todoId,
      newTitle: newTitle,
      newDescription: newDescription
    }

    axios.post(server.updateTodo, data)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return(
    <TodoComponent checked = {isChecked}>
      <span className = "content">
        <h3>
          {props.title !== "null"
            ? (props.title.length > 20 && !isShowAll
              ? props.title.slice(0, 20)
              : props.title
            )
            : <p style = {{color: theme.gray}}>Untitled To-do</p>
          }
        </h3>
        <p className = "text-show" onClick = {() => setShowAll(!isShowAll)} style = {{display: isShowAll ? "none" : "block"}}>show all...</p>
        <p className = "text-show" onClick = {() => setShowAll(!isShowAll)} style = {{display: isShowAll ? "block" : "none"}}>close...</p>
        <p style = {{marginTop: "7px"}}><b>Created at:</b> {moment(props.addDate).format("MMMM Do YYYY")}</p>
        {props.updateDate && <p><b>Updated at:</b> {moment(props.updateDate).format("MMMM Do YYYY")}</p>}
      </span>
      <span className = "description">
        <p>
          {props.description !== "null"
            ? props.description
            : <p style = {{color: theme.gray}}>No Description</p>
          }
        </p>
      </span>
      <span className = "actions">
        <p>
          <AiOutlineEdit
            onClick = {() => handleTodoEdit(props.id)} 
            style = {{fill: theme.blue}}
          />
        </p>
        <p>
          <AiFillCheckCircle 
            onClick = {() => handleChecked(props.id)}
            style = {{transition: "0.2s ease",fill: isChecked ? theme.green : theme.gray}}
          />
        </p>
      </span>
    </TodoComponent>
  )
}

export default Todo