import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Home from './Pages/Home';
import NewNota from './Pages/NewNota';



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='home' element={<Home />}>
              <Route path='new' element={<NewNota />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
