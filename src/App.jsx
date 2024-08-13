// import { useState } from 'react'
import "./App.css";
import Add from "../src/pages/Add"
import Edit from "../src/pages/Edit"
import ShowCreators from "../src/pages/ShowCreators"
import ViewCreator from "../src/pages/ViewCreator"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="root">
      <Router>
      <main>
        <Routes>
          <Route path = "/" element = {<ShowCreators/>}> </Route>
          <Route path = "/create" element = {<Add/>}> </Route>
          <Route path = "/edit/:id" element = {<Edit/>}> </Route>
          <Route path = "/details/:id" element = {<ViewCreator/>}> </Route>
        </Routes>
      </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
