import server from "./server.config.json"
import theme from "./theme"
import axios from "axios"
import {useState, useEffect} from "react"
import media from "styled-media-query"
import styled from "styled-components"
import {GrAddCircle} from "react-icons/gr"

import {
  AppContainer,
  Button,
  Container,
  Row
} from "./components/Layout"
import Todo from "./components/Todo"
import TopHeader from "./components/TopHeader"


const TodoContainer = styled(Row)`
  width: 100%;
  height: 70vh;
  padding: 0 20px;
  overflow: auto;
  margin-bottom: 3vh;
  overflow-x: hidden;
  justify-content: flex-start;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

const AddTodoSpan = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  right: 15px;
  margin: 2vh 0 1vh 0;

  ${media.lessThan("medium")`
    & > p {
      font-size: 0.75rem;
    }
  `}
`

const App = () => {
  const [todos, setTodos] = useState([])
  const [incompleted, setIncompleted] = useState(0)

  const handleAddNewTodo = () => {
    let newTodoTitle = prompt("New to-do title:")
    let newTodoDescription = prompt("New to-do description:")
    let data = {
      title: newTodoTitle,
      description: newTodoDescription
    }

    axios.post(server.addTodo, data)
      .then(async () => {
        let todos = await axios.get(server.todos)
        setTodos(todos.data.response)
        setIncompleted(todos.data.response.filter(item => item.status === false).length)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    const loadTodos = async () => {
      let todos = await axios.get(server.todos)
      setTodos(todos.data.response)
      setIncompleted(todos.data.response.filter(item => item.status === false).length)
    }

    loadTodos()
  }, [])
  
  return (
    <AppContainer bg = {theme.dark} className = "App">
      <Container>
        <Row style = {{marginTop: "5vh"}}>
          <TopHeader />
        </Row>
        <Row>
          <AddTodoSpan>
            <Button
              onClickFunction = {handleAddNewTodo}
              header = "Add New Todo"
              icon = {<GrAddCircle style = {{fill: theme.light}} />}
              width = "50%"
              bg = {theme.blue}
              color = {theme.light} />
            <p>{incompleted} to-do remaining</p>
          </AddTodoSpan>
          <TodoContainer>
            {todos && todos.map((item) => 
              <Todo
                key = {item.id}
                id = {item.id}
                title = {item.title}
                addDate = {item.add_date}
                updateDate = {item.update_date}
                description = {item.description}
                status = {item.status}
              />
            )}
          </TodoContainer>
        </Row>
      </Container>
    </AppContainer>
  )
}

export default App