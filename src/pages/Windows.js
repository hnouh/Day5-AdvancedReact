import {useState,useEffect} from 'react';

export default function Windows() {

    const [windowSize,setWindowSize]=useState(window.innerWidth)

    function handleSize() {
        setWindowSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",handleSize)
    },[windowSize])

    return (
        <div>
            {windowSize}
        </div>
    )
}
