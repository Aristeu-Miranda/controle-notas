import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import PageBase from './Pages/PageBase';
import NewNota from './Pages/NewNota';
import Contato from './Pages/Contato';
import Singup from './Pages/Sing-up';
import { UserProvider } from './Contexts/User/UserContext';




function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='sing-up' element={<Singup />} />
              <Route path='cn' element={<PageBase />}>
                <Route path='new' element={<NewNota />} />
                <Route path='suporte' element={<Contato />} />
              </Route>
          </Routes>
        </UserProvider>
    </BrowserRouter>
  );
}

export default App;
