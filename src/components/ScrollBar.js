import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ScrollBar(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  


  return (
    <>
    <Carousel    className='bg-dark  w-100 '  responsive={responsive}  showDots={true} autoPlay={props.deviceType !== "mobile" ? true : false} autoPlaySpeed={2000} keyBoardControl={false}  infinite={true}
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  
  >
      {
        props.topanime?.map((data,idx)=>{
         
          return <div className='wallpaper-top position-relative'> 
          <img className=' img-wallpaper w-100  pt-2' alt="top-anime" src={data.images.jpg.image_url}/>  
          <div className='img-wallpaper-details text-light fw-bolder text-center position-absolute bottom-0 start-50 translate-middle '>
              <ul>
                 <li className='btn btn-warning  fw-bolder '>{data.genres[0].name}</li>
              </ul>
              <p className='fs-5'>{data.title_english}</p>

          </div>
          </div>
        })
      }
    </Carousel>
    </>
  )
}
