import React, { useEffect, useState } from "react";
import axios from "axios";
import CardChild from "./CardChild";
import FlexContainer from 'react-styled-flexbox';


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
        <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
    {character.map(character => {
              return (
                
                <CardChild
                  key = {character.created}
                  name={character.name}
                  height = {character.height}
                  mass = {character.mass}
                  hair_color = {character.hair_color}
                  eye_color = {character.eye_color}
                  skin_color = {character.skin_color}
                  gender = {character.gender}
                />
              );
            })}
            
        </FlexContainer>
    )
  }
  
  export default CardParent;