import React from 'react'
import { Button } from 'bootstrap';
import  { useEffect, useState } from 'react'
import { BookmarkFill, Eye, Heart, ThreeDots } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export default function AnimePageTop({data,related1}) {

  return (
    <>
        <div className='row'>
            <div className='col-10'>
                <iframe className='iframe my-4 mx-2 ' width="1000" height="565" src={`https://www.youtube.com/embed/${data}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>   
            <div className='col-2 my-2'>
            <h5 className=' text-warning my-3 '> RELATED</h5>
                {
                related1?.map((d,i)=>{
                   

                    return  <a href={`/anime/${d.entry[0].mal_id}`} className='side-bar'>

                            <div  className="top-anime-side  row">
                                <div className='col-2'>
                                    <BookmarkFill className="text-warning"/>
                                </div>
                                <div className='col-10 mb-1 '>
                                        <p className="text-warning">{d.relation}</p>
                                        <p className='text-light'>{d.entry[0].name}</p>
                                </div>  
                            </div>
                    </a>
                })
                }
            </div>

        </div>
    </>
  )
}
