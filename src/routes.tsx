import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import PageBase from './Pages/PageBase';
import NewNota from './Pages/NewNota';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import UserProvider from './Contexts/User/UserContext';



function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='cn' element={<PageBase />}>
                <Route path='home' element={<Home />} />
                <Route path='new' element={<NewNota />} />
                <Route path='contato' element={<Contato />} />
              </Route>
          </Routes>
        </UserProvider>
    </BrowserRouter>
  );
}

export default App;
