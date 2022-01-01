import {useState,useEffect} from 'react';
import axios from 'axios'
import { Ring } from 'react-awesome-spinners'

export default function Resource() {
    const [resourceType,setResourceType] = useState('films')
    const [results, setResults]=useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://ghibliapi.herokuapp.com/${resourceType}`).then((res)=>{
            console.log(res.data)
            setResults(res.data)
            setLoading(false)
        })

    },[resourceType])


    if(loading){
        return(
            <Ring color="#1DB98B"/>
        )
    }

    return (
        <div>
            <button onClick={()=>setResourceType("films")}>Films</button>
            <button onClick={()=>setResourceType("people")}>people</button>
            <button onClick={()=>setResourceType("locations")}>locations</button>
            {(function(){
                if(resourceType=="films"){
                    return (
                        <>
                        {results.map((film)=>{
                            return(
                                <>
                                <h3>Title: {film.title}</h3>
                                <img src={film.image} width={"300px"} height={"400px"}></img>
                                <h5>director: {film.director}</h5>
                                <hr></hr>
                                </>
                            )
                        })}
                        </>
                    )
                }
                else if(resourceType=="people"){
                    return (
                        <>
                        {results.map((person)=>{
                            return(
                                <>
                                <h3>Name :{person.name} and the gender is:{person.gender} and the age : {person.age}</h3>
                                <hr></hr>
                                </>
                            )
                        })}
                        </>
                    )
                }
                else if(resourceType=="locations"){
                    return (
                        <>
                        {results.map((location) =>{
                            return(
                                <>
                                <h3>Location name :{location.name}</h3>
                                <hr></hr>
                                </>
                            )
                        })}
                        </>
                    )
                }

            })()}
        </div>
    )
}
