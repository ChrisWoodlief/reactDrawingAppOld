import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<DrawingsFeed />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </header>
    </div>
  );
}

function DrawingsFeed() {
  return (
    <>
      Drawings Feed here
    </>
  );
}

function Login() {
  return (
    <>
      Login page here
    </>
  );
}

function Create(){
  return (
    <>
      Create page here
    </>
  )
}


export default App;
