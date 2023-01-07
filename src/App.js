import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import New from "./pages/New";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import "./style/App.css";
import DiaryProvider from "./context/DiaryContext";

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  return (
    <DiaryProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/diary/:id" element={<Diary />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryProvider>
  );
}

export default App;
