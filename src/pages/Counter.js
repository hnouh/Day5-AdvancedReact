import {useState, useReducer,useEffect} from 'react';

const initialState ={
    counter:0,
    counter2:10
}
function reducer(state=initialState, {type, payload}) {
    switch(type){
        case 'INCREASE':
            return {counter:state.counter+1, 
                counter2:state.counter2+1}
        case 'DEC-COUTER':
            return {counter:state.counter-1,
                counter2:state.counter2-1}
        case 'RESET-COUTER':
            return {counter:0,counter2:10,}
        default: return state
    }
}


export default function Counter() {

    const [count, dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            Counter 1:{count.counter}<br></br>
            Counter 2:{count.counter2}<br></br>
            <button onClick={()=>dispatch({type:"INCREASE"})} >+</button><br></br>
            <button onClick={()=>dispatch({type:"DEC-COUTER"})} >-</button><br></br>
            <button onClick={()=>dispatch({type:"RESET-COUTER"})} >RESET</button><br></br>

            
        </div>
    )
}
