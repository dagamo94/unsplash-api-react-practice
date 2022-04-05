import './App.css';
import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Feed from "./Feed/Feed";
import Header from "./Layout/Header";
function App() {
  return (
    <div>
      {/* Import header component to be rendered on all pages */}
      <Header />

      {/* Build out page with components based on the visited routes by the user */}

      <Routes>
        <Route exact path="/" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
