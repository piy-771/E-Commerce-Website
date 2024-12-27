import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import './css/App.css';
import Home from "./Home";
import Shop from "./Shop";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path="home" element ={<Home/>}/>
          <Route path="/shop" element ={<Shop/>}/>

          </Route>
        </Routes>
      </BrowserRouter>

    
    </>
  )
}
export default App;