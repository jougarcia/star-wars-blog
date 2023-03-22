import React, {useContext, useEffect, useState} from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {Card} from "../component/card.jsx"
import "/workspace/react-hello-webapp/src/js/component/estilos.css"
export const Home = () => {
const {actions, store}=useContext(Context)


useEffect(()=>{
    actions.getStarwars("planets")
}, [])
useEffect(()=>{
    actions.getStarwars("starships")
}, [])
useEffect(()=>{
    actions.getStarwars("people")
}, [])
useEffect(()=>{
    actions.getStarwars("films")
}, [])


return (
    
<div className="container-fluid">
<div>
                <img src="https://en.wikipedia.org/wiki/Star_Wars#/media/File:Star_wars2.svg" alt="" />
            </div>
        <div className="container over">
            <div>
                <img src="https://en.wikipedia.org/wiki/Star_Wars#/media/File:Star_wars2.svg" alt="" />
            </div>
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px"}}>
                {store.planets.map((planet,index)=>(
                <div key={planet.uid} className="list-group-item" style={{maxHeight: "50%"}}>
                    <Card
                        title={planet.name}
                        text={planet.description}
                        image={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                        type="planets"
                        id={planet.uid}
                        index={index}
                    />
                </div>
                    ))}
            </div>
        </div>

        <div className="container over">
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px"}}>
                {store.starships.map((starship,index)=>(
                <div key={starship.uid} className="list-group-item" style={{maxHeight: "100%"}}>
                    <Card
                        title={starship.name}
                        text={starship.description}
                        image={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                        type="starship"
                        id={starship.uid}
                        index={index}
                    />
                </div>
                    ))}
            </div>
        </div>
        <div className="container over">
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px",}}>
                {store.people.map((people,index)=>(
                <div key={people.uid} className="list-group-item" style={{maxHeight: "100%"}}>
                    <Card
                        title={people.name}
                        text={people.description}
                        image={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                        type="characters"
                        id={people.uid}
                        index={index}
                    />
                </div>
                    ))}
            </div>
        </div>
        <div className="container over">
            <div className="list-group-horizontal d-flex overflow-scroll "style={{maxHeight: "300px"}}>
                {store.films.map((film,index)=>(
                <div key={film.uid} className="list-group-item" style={{maxHeight: "100%"}}>
                    <Card
                        title={film.properties.title}
                        image={`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
                        type="films"
                        id={film.uid}
                        index={index}
                    />
                </div>
                    ))}
            </div>
        </div>
    </div>

    )

}
