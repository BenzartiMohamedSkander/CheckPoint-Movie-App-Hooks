import React from 'react'
import './MovieCard.css'
import Rate from '../Rate/Rate'
function MovieCard({movie : {name, image, date, description, rating }},key) {
    return (
        <div>
            



            <div className="container" >
               {/* <h2 >Profile Page</h2>    
               <br/><br/> */}
               <div className="card" style={{width:"275px", height:"680px"}}>
                   <Rate rating={rating}/>
                 <img className="card-img-top" src={image} alt="Card" style={{width:"100%", height:"55%"}}/>
                 <div className="card-body">
                   <h4 className="card-title">{name}</h4>
                   <h6 className="card-title">{date}</h6>
                   <p className="card-text">{description}</p>
                   <a href="#" className="btn btn-primary bottom" >Watch Movie</a>
                   <br/>      <br/>
                 </div>
               </div>
               <br/>
    
                <p> </p>
             </div>


















        </div>
    )
}

export default MovieCard
