import  {useEffect} from 'react'

export default function useDocument(count) {

    useEffect(()=>{
        document.title=`Count: ${count}`
    },[count])
}
