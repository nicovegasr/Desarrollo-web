import React from "react";

export function Card(props) {
    return (
        <div className="card">
            <img
            className="card-image"
            src={require("../imagenes/testimonio-emma.png")}
            alt="Foto de emma"/>
            <div className="card-text">
                <p className="name-card">{props.introduction}</p>
                <p className="position">{props.charge}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
