import Button from 'react-bootstrap/Button';    
import React from 'react'
import { useState } from 'react';
import { Bucket } from 'react-bootstrap-icons';
import {Collapse} from 'react-collapse';
import "../style/AnimeSpecific.css"
export default function AnimeSpecifics({anime}) {
    console.log(anime)
    const handleClick=()=>{
        let no=yes==true?false:true;
        setyes(no)
    }
    const [yes, setyes] = useState(true)
  return (
    <>
      <div className=' anime-specific-box'>
                 
                    <img src={anime?.images.jpg.image_url} className="img-anime-specific" />
                  
                  <div className='mx-4' >
                      <h4 className='text-warning'>{anime?.titles[0].title}</h4>
                      <p className='side-2-para'>{anime?.titles[1].title}</p>
                      {
                        yes?<p>{anime?.synopsis.substr(0,300)} ...<Button onClick={handleClick}  variant="warning">More</Button></p> :<p>{anime?.synopsis} <Button onClick={handleClick} variant="warning">Less</Button> </p>
                      }
                    <div className='anime-specific-details'>
                            <p><span className='text-secondary'>Type: </span>{anime?anime.type?anime.type:"Data Not Available":""}</p>
                            <p><span className='text-secondary'>Studio: </span>{anime?.studios[0]?.name}</p>
                            <p><span className='text-secondary'>Date Aired: </span>{anime?.aired.string?anime.aired.string:"Not Available"}</p>
                            <p><span className='text-secondary'>BroadCast: </span>{anime?.broadcast.string}</p>
                            <p><span className='text-secondary'>Status: </span>{anime?anime.status?anime.status:"Data Not Available":""}</p>   
                            <p><span className='text-secondary'>Genre: </span>{anime?.genres[0]?.name}</p>
                            <p><span className='text-secondary'>Scores: </span>{anime?anime.score?anime.score:"Data Not Available":""} by {anime?.scored_by}</p>
                            <p><span className='text-secondary'>Premiered: </span>{anime?anime.season?anime.season:"Data Not Available":"Finding"} {anime?anime.year?anime.year:"":"Finding"}</p>
                            <p><span className='text-secondary'>Duration: </span>{anime?anime.duration?anime.duration:"Data Not Available":"Finding"}</p> 
                    </div>
                                                 
                   </div>
        </div>
    </>
  )
}
