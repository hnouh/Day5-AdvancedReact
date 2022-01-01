import {useState, useRef,useEffect} from 'react';

export default function Name() {

    const [name,setName]= useState('')
    const inputRef=useRef()
    const namePrev=useRef('')

    useEffect(()=>{
        inputRef.current.focus()
        // inputRef.current.value = "Nouh"
        namePrev.current=name

    },[name])

    return (
        <div>
            <input ref={inputRef} onChange={(e)=>{setName(e.target.value)}} ></input>
            <h3>My previous name: {namePrev.current} and the new : {name} </h3>
        </div>
    )
}
