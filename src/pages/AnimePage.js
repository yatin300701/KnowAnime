
import AnimePageTop from "../components/AnimePageTop"
import AnimeSpecifics from "../components/AnimeSpecifics"
import { Button } from 'bootstrap';
import  { useEffect, useState } from 'react'
import { BookmarkFill, Eye, Heart, ThreeDots } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import "../style/AnimePage.css"

export default function AnimePage() {
    let {id} =  useParams();
    const [data, setdata] = useState()
    const [anime, setanime] = useState()
    const [relatentry, setrelatentry] = useState()
    const [related1, setrelated1] = useState(

    )
    useEffect(() => {
    
     fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
     .then((res)=>res.json())
     .then((res)=>{
         let animee = res?.data.relations;
         setanime(res.data)
         let related = animee?.map((data,idx)=>{
                return data
         })
         let related_entry = related.map((d,i)=>{
            return d.entry[0]
         })
         let related_header = related.map((d,i)=>{
            return d.relation
         })
         



         let st=res?.data.trailer.url;
         let text=st.replace("https://www.youtube.com/watch?v=","")
         setdata(text)
         setrelated1(related);
         setrelatentry(related_entry);
         
     })
     
    }, [data])
    
    
  return (
    <div style={{backgroundColor:"#19120B",color:"white"}}>
        <AnimePageTop related1={related1} data={data}/>
        <AnimeSpecifics anime={anime}/>
    </div>
  )
}
