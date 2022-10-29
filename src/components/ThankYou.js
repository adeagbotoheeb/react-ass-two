import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate()

  return (
    <>
    <div>Thank You!</div>
    <button onClick={() => navigate(-1)}>Go back</button>
    </>
    
  )
}

export default ThankYou;
