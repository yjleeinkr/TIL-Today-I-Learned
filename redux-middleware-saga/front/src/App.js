import { createGlobalStyle } from 'styled-components'
import TodoLayout from './components/TodoLayout';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem'
import TodoAdd from './components/TodoAdd'

const GlobalStyle = createGlobalStyle`
body{
  background-color : #EBEFF5;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoLayout>
        <TodoHead />
        <TodoList />
        <TodoAdd />
      </TodoLayout>
    </>
  );
}

export default App;
