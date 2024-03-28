import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'
function Card({heading,img,disc,url}) {
    const navigate=useNavigate()
  return (
    <main>
      <div className="card overly">
        <img
          src={img?img:"https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"}
          alt=""
        />
        <div className="card-content">
          <h2 style={{color:"white"}}>{heading}</h2>
          <p>
            {disc}
          </p>
          <a href="#" className="button btn btn-success" 
           onClick={(e) => {
            e.preventDefault();
            // navigate(`/packages/${place.name}`);
            navigate(url);
          }}
          >
            Find out more
          </a>
        </div>
      </div>
    </main>
  );
}

export default Card;
