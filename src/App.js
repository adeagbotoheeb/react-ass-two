import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import ThankYou from "./components/ThankYou";
import NoMatch from "./components/NoMatch";
import Nested from "./components/Nested";
import FeatureProducts from "./components/FeatureProducts";
import BreakingNews from "./components/BreakingNews";
import BlogWebsite from "./components/BlogWebsite";
import ErrorBoundary from "./components/ErrorBoundary";
import Boundary from "./components/Boundary";

function App() {
  return (
    <>
    
      <ErrorBoundary>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="nested" element={<Nested />} >
          <Route path='featured' element={<FeatureProducts />} />
          <Route path='news' element={ <BreakingNews />} />
          <Route path='blog' element={<BlogWebsite />} />
        </Route>
        <Route path="*" element={ <NoMatch />} />
        <Route path='boundary' element={ <Boundary time='physics' />} />
        
      </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
