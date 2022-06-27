import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {msgSelector} from "../redux/redusers/messageReduser/selectors";
import {useParams} from "react-router";
import {DEL_MSG, ADD_MSG} from "../redux/actions/actionTypes";
import {NavLink} from "react-router-dom";




const Messages = () => {
    const chatsMsg = useSelector(msgSelector);
    const {idm} = useParams();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const msg = chatsMsg.filter((message) => {
        if(!idm) return true;

        return message.chatId === Number(idm)
    })
    const addMsg = () => {
        const obj = {
            id: Math.random(),
            chatId: idm,
            title: title,
        }
        dispatch({type: ADD_MSG, payload: obj, meta:{
            delay: 1500,
            }})
    }

    const delMsg = (id) => {
       dispatch({type: DEL_MSG, payload: id, meta:{
           delay: 1500,
           }})
    }


    const runMsg = (ev) => setTitle(ev.target.value);
    return (
        <div>
            <input value={title} onChange={runMsg}/>
            <button onClick={addMsg}>Отправить</button>
            {msg.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <button onClick={() => delMsg(item.id)}>Удалить</button>
                </div>
            ))

            }
           <div>
               <NavLink  to={`/`}>
                   К списку чатов
               </NavLink>
           </div>

        </div>
    );
};

export default Messages;