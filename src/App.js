import "./App.css";
// import Header from './Components/Header'
import { Body, Header, Gallary } from "./Components/";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route exact path="body" element={<Body />} />
          <Route path="gal" element={<Gallary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
