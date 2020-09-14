
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
//import TodoList from './TodoList'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Container, Row, Col } from "./Grid";

const App = () => (

  <Container fluid>
  <Row>
  <Col size = "md-12">
  <h1 style={{textAlign: "center"}}>Redux Todo List!</h1>
  <div style={{textAlign: "center"}}>
    
  <AddTodo />
  {/* <TodoList /> */}
  <VisibleTodoList />
    <Footer />
  </div>
  </Col>
  </Row>
  </Container>
)

export default App