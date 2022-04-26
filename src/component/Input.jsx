import { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
    const [input, setInput] = useState("")
    const [results, setResults] = useState([])        
    const clear = () => {
        setResults([])
    }

    const submitThes = async () => {
        const url=`https://dictionaryapi.com/api/v3/references/thesaurus/json/${input}?key=8e7df91a-7eb0-4a27-88dc-a1403cd9fa2c`
        const res = await axios.get(url)
        if(res){
            // const responseJson = await res.data.json()
            setResults(res.data[0].meta.syns[0])
        }
    }
    
    return(
        <div className="wrap">
        <input value={input} onChange={(event) => setInput(event.target.value)}  />
        <div className="btns">
        <button className="submit" onClick={submitThes}>Find Your New Word</button>
        <button className="clear" onClick={clear}>Clean this up!</button>
        </div>
        <div className="backdrop">
        <ul>
            {results.map(syn => {
                return(
                    <li>{syn}</li>
                )
            })}
        </ul>
        </div>
        </div> 
    ) 

}




export default Input