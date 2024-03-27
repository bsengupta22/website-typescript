// code written for all entry points/pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./root";
import StockSelection from "./scenes/portfolio/ProjectPages/StockSelection";
import { NoPage } from "./scenes/NoPage";



// Enums restrict pages to only be able to access these


function App() {


  return (
<BrowserRouter>
<Routes>
    <Route index element = {<Root/>} />
    <Route path ="/stockselection" element = {<StockSelection/>} />
    <Route path = "/*" element = {<NoPage/>}/>

  </Routes>
  </BrowserRouter>

  )
}

export default App;
