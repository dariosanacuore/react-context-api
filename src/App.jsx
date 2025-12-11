import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Products from "./pages/Products";
import DefaultLayout from "./layouts/DefaultLayout";
import NotFound from "./pages/NotFound";
import { BudgetProvider } from "./context/BudgetContext";
import Navbar from "./components/Navbar";
import SingleProduct from './pages/SingleProduct'


function App() {


  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/chi-siamo" element={<About />} />
              <Route path="/prodotti">
                <Route path="" element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
