import React from 'react';
import {useSelector, useDispatch} from "react-redux";


const Count = () => {
    const value = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch( {
                type: 'delete'
            })}> - </button>
            {value}
            <button onClick={() => dispatch( {
                    type: 'add'
                })}> + </button>
        </div>
    );
};

export default Count;