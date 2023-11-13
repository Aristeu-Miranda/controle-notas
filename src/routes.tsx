import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import PageBase from './Pages/PageBase';
import NewNota from './Pages/NewNota';
import Contato from './Pages/Contato';
import UserProvider from './Contexts/User/UserContext';
import Login from './Pages/Home';



function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='login' element={<Login />} />
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
