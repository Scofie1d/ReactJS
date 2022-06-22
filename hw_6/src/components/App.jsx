import React from 'react';
import {Route, Routes} from "react-router";
import Chats from "./Chats";
import Messages from "./Messages";


const App = () => {
    return (
        <Routes>
          <Route path='/' element={<Chats />} />
          <Route path='/message/:id' element={<Messages />} />
        </Routes>
    );
};

export default App;