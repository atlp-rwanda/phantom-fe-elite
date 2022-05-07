/** @format */
/** @format */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AdminPanel from "./component/Admin-panel/AdminPanel";
const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col ">
       
        <main className="mb-12 flex-grow">
          <Routes>
            
            <Route exact path="/" element={<AdminPanel />}></Route>
          
          </Routes>


        </main>
        </div>
    </BrowserRouter>
  );
};

export default App;
