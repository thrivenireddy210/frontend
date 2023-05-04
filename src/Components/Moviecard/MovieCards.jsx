import React from "react";
import "./movie.css";
const MovieCards = (props) => {
  console.log("dream", props);
  return (

    <div class="card-container">
        <div class="main">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">{props.name}</h2>
          <span class='card-rating'>{props.rating}</span>
        
        </div>
        <div class='card-bpdy'>
           <p class='card-body-relese'>Release date:{props.release_Date}</p> 
        </div>
      </div>
      </div>
    </div>
  );
};

export default MovieCards;
