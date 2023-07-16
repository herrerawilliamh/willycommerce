import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer />}/>
          <Route path="/productos/:categoria" element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemListContaine /> 
      <ItemDetailContainer itemId={2} /> */}
    </div>
  );
}

export default App;
