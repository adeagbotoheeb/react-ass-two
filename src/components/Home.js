import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate("thank-you", { replace: true })}>
        Learn more
      </button>
    </>
  );
};

export default Home;
