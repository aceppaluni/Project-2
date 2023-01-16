import React from "react"
import Header from "./Header"
import Trip from "./Trip"
import data from "./data"


export default function App(){
    const tripElements = data.map(trip =>{
        return <Trip 
                key={trip.id}
                item={trip}
                
        />
    })
    return (
        <div>
            <Header />
            <section className="trips-list">
                {tripElements}
            </section>   
        </div>
    )
}