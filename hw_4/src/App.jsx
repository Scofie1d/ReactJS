import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Chat from "./Pages/Chat";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Layout from "./Layout";
import NotFound from "./Pages/NotFound";

function App() {
  return (
          <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
  );
}

export default App;
