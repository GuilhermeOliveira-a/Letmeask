/*Importação dou Router DOM*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Importação das outras paginas*/
import { NewRom } from './pages/NewRom';
import { Home } from './pages/Home';


function App() {
  return (
    //
    <BrowserRouter>
      <Routes>
       <Route path= "/" element = {<Home/>}/>
       <Route path= "/rooms/new" element = {<NewRom/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
