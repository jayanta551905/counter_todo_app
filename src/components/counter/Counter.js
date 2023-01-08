import React, { useReducer, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCustom } from '../../redux/state/counter/counterSlice';

const counter = () => {
    
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    const myNumber = useRef();

    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
               <h4 className='text-white'>My Counter App</h4> 
            </div>
            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-success'>Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className='btn mx-2 btn-danger'>Decrease</button>
                </div>
                <div className='my-4'>
                    <input ref={myNumber} className='form-control w-50 my-2' type="number"/>
                    <button onClick={()=>{dispatch(setCustom(myNumber.current.value))}} className='btn 
                    w-50 my-2 btn-danger'>Set Custom</button>
                </div>
            </div>       
        </div>
    );
};

export default counter;