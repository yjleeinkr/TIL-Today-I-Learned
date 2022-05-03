import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Counter from './pages/counter'
import Comment from './pages/comment'
import Login from './pages/login'
import Header from './components/common/header'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/comment" element={<Comment />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
