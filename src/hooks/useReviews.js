import { useEffect, useState } from "react"

const useReviews = () =>{
    const [review,setReview] = useState([])
    useEffect(() =>{
        fetch('reviewsdata.json')
        .then(res =>res.json())
        .then(data =>setReview(data))
    },[]);
    return  [review,setReview];
}
export default useReviews;