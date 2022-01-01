import React , {useState,useEffect} from 'react'
import useDocument from '../hooks/useDocument'
import useCount from '../hooks/useCount'
export default function DocumentTitle2() {
    const [count, increment, decrement]= useCount()
    const countDoc = useDocument(count)

    return (
        <div>
            {count}
            <button onClick={increment} >+</button>
            <button onClick={decrement}>-</button>
            
        </div>
    )
}
