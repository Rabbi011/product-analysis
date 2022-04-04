import { useEffect, useState } from "react"

const useGraph = () =>{
    const [graphs,setGraphs] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setGraphs(data))
    },[])
    return [graphs,setGraphs]
}
export default useGraph;