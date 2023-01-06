import React, { useEffect, useState } from 'react'
import { Eye, Heart } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import "../style/body.css"


export default function Body(props) {
  

  return (
   <Container> 
    <div className='row bg-dark text-primary pt-3 '>
      <div className='col-lg-9'>
        <h4 className=' text-warning '>RECENT</h4>
            <div className='grid'>
               
                {
                    props.randomanime?.map((data,idx)=>{
                    
                      return <div className='anime-cards'>
                      <div className='anime-cards-top'>
                        <Link to={`/anime/${data.entry.mal_id}`} className='anime-cards-top-a'>
                          <img src={data.entry?data.entry.images.jpg.image_url:""} className='anime-img-cards'/>
                          <p>Total {data.episodes[0].title} </p>
                        </Link>
                      </div>                      
                      <p className='anime-crad-title'><a href='#'>{data.entry.title}</a></p>
                      </div>
                    })
                }

            </div>
      </div>
      <div className='col-sm-3 right-side-anime-div'>
          <h4 className=' text-warning  mb-3'>TOP ANIME</h4>
          {
            props.topanime?.map((data,idx)=>{
             
              return <Link to={`/anime/${data.mal_id}`} className='side-bar'><div className='row top-anime-side'>
                  <div className='col-4'>
                    <img src={data.images.jpg.image_url} className="img-anime-side" />
                  </div>
                  <div className='col-8 '>
                      <p className='side-1-para'>{data.title}</p>
                      <p className='side-2-para'><span><Heart /> {data.score}</span> <span><Eye/> {data.scored_by}</span></p>
                   </div>
              </div>
              </Link>
            })
          }

        
      </div>
    </div>
   </Container>
  )
}
