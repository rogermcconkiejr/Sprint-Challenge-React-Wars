import React, { useEffect, useState } from "react";
import axios from "axios";
import CardChild from "./CardChild";

function CardParent() {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`, {
          params: {}
        })
        .then(response => {
          const character = response.data.results;
          console.log("Character:", character);
          setCharacter(character);
        });
    }, []);
    return (
      <div>
    {character.map(character => {
              return (
                <CardChild
                  key = {character.created}
                  name={character.name}
                  height = {character.height}
                  mass = {character.mass}
                  hair_color = {character.hair_color}
                />
              );
            })}
        </div>
    )
  }
  
  export default CardParent;