import React from 'react';
import {useSelector, useDispatch} from "react-redux";


const Count = () => {
    const value = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
           <div> <button onClick={() => dispatch( {
               type: 'delete'
           })}> - </button></div>
           <div> {value}</div>
           <div> <button onClick={() => dispatch( {
               type: 'add'
           })}> + </button></div>
        </div>
    );
};

export default Count;