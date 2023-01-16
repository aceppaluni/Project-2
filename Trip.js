import React from "react"

export default function Trip(props){
    return (
        <div className="container">
            <div className="card">
                <div>
                    <img src={props.item.imageUrl}/>
                </div>
                <div className="des-location">
                    <p className="location">{props.item.location}
                        <span className="material-symbols-outlinec" id="icon"></span>
                        <span className="country-name"></span>
                        <a className="map" href={props.item.googleMapsUrl} target="_blank">View on google maps</a>
                    </p>
                    <h2 className="title">{props.item.title}</h2>
                    <h4 className="time">{props.item.startDate} - {props.item.endDate}</h4>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}