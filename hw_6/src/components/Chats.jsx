import React from 'react';
import {useSelector} from "react-redux";
import {chatsSelector} from "../redux/redusers/chatsReduser/selectors";
import {NavLink} from "react-router-dom";

const Chats = () => {
    const chats = useSelector(chatsSelector)
    return (
        <div>
            {
                chats.map((chat) => (
                   <div key={chat.id}>
                       <NavLink  to={`/message/${chat.id}`}>
                           {chat.name}
                       </NavLink>
                   </div>
                ))
            }
        </div>
    );
};

export default Chats;