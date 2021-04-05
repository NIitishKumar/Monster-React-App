import React from "react";
import "/home/engineer/Desktop/React/my-app/src/Component/Card-list/style.css";

function Card(props) {
  return (
    <div>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img>
      <h1 className="card-container">{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Card;
