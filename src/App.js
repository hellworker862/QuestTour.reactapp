import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import Header from "./components/header/Header"

const App = () => {
  return (
    <AuthContext.Provider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
