import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../style/genrepage.css"

export default function GenrePage() {
    const {id} = useParams();
    const [data, setdata] = useState()
    useEffect(() => {
        Object.filter = (obj, predicate) => 
          Object.keys(obj)
             .filter( key => predicate(obj[key]) )
      fetch("https://api.jikan.moe/v4/genres/anime").then((res)=>res.json())
      .then((res)=>{
           
            var result=res.data.filter(x=>x.name.toLowerCase()==id)
            console.log(res.data)
            console.log(result)
            setdata(result)
      })
    }, [])
    
  return (
    <>
                {
                    data?.map((data,idx)=>{
                      return <div className='genre-card text-light bg-dark'>
                               
                                <div className='genre-detail'>
                                        <p className='hp'>{/*  Name */} {data.name}</p>
                                        <p className='countp'>Count of animes : {data.count}</p>
                                        <a class="btn btn-warning text-dark fw-bold" href={data.url} target="_blank"  role="button">Link</a>
                                </div>
                      </div>
                    })
                }
    </>
  )
}
