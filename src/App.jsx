import "./App.css";
import "@splidejs/react-splide/css";
import UserCards from "./Card";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./CardDetail";

function App() {
  return (
    <div className='main_body'>
      <Routes>
        <Route path='/' element={<UserCards />} />
        <Route path='/detail/:id' element={<CardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
