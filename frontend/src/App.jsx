import theme from "./theme"
import TopHeader from "./components/TopHeader"
import TodoList from "./components/TodoList"

import {
  AppContainer,
  Container,
  Row
} from "./components/Layout"


const App = () => {
  return (
    <AppContainer bg = {theme.dark} className = "App">
      <Container>
        <Row style = {{marginTop: "5vh"}}>
          <TopHeader />
        </Row>
        <Row style = {{marginBottom: "5vh", justifyContent: "flex-start"}} height = "70vh">
          <TodoList todos = {["Deneme Todo 1", "Deneme Todo 2"]}/>
        </Row>
      </Container>
    </AppContainer>
  )
}

export default App
